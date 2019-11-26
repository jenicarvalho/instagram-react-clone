import React, { useState, useEffect } from "react";
import Storie from "./Storie";
import { Container } from "./styles";

export default function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/stories", {
      method: "GET"
    })
      .then(res => res.json())
      .then(response => {
        setStories(response);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <Container>
      <h2>Stories</h2>

      {stories.map(storie => (
        <Storie key={storie.id} content={storie} />
      ))}
    </Container>
  );
}
