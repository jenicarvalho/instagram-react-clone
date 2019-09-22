import React from "react";

import TopInfo from "../TopInfo";
import { Container } from "./styles";
import Logo from "../../images/logo-instagram.png";

export default function Header() {
  return (
    <Container>
      <header>
        <img src={Logo} alt="Logo Instagram" />
        <TopInfo />
      </header>
    </Container>
  );
}
