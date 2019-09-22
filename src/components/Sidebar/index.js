import React from "react";
import UserInfo from "./UserInfo";
import Stories from "./Stories";

import { Container } from "./styles";

export default function Sidebar() {
  return (
    <Container>
      <UserInfo />
      <Stories />
    </Container>
  );
}
