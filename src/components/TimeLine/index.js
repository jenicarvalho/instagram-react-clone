import React, { useState, useEffect } from "react";

import Post from "./Post";
import { Container } from "./styles";

export default function TimeLine() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/posts", {
      method: "GET"
    })
      .then(res => res.json())
      .then(response => {
        setPosts(response);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      {posts.map(post => (
        <Post key={post.id} content={post} />
      ))}
    </Container>
  );
}
