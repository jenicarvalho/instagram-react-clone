import React from "react";

import Post from "./Post";
import { Container } from "./styles";

export default function TimeLine() {
  return (
    <Container>
      <Post />
      <Post />
    </Container>
  );
}
