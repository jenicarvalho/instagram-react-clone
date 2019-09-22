import React from "react";

import { Container, User, Image } from "./styles";

export default function Storie() {
  return (
    <Container>
      <Image>
        <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="user" />
      </Image>
      <User>
        <strong>diegos</strong>
        <span>Há 2 horas</span>
      </User>
    </Container>
  );
}
