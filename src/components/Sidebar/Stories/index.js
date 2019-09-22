import React from "react";
import Storie from "./Storie";
import { Container } from "./styles";

export default function Stories() {
  return (
    <Container>
      <h2>Stories</h2>

      <Storie />
      <Storie />
      <Storie />
    </Container>
  );
}
