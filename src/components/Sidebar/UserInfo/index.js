import React from "react";

import { Container, User } from "./styles";

export default function UserInfo() {
  return (
    <Container>
      <img
        alt="Perfil"
        src="https://randomuser.me/api/portraits/women/25.jpg"
      />
      <User>
        <strong>jenifcarvalho</strong>
        <span>Jeniffer Carvalho</span>
      </User>
    </Container>
  );
}
