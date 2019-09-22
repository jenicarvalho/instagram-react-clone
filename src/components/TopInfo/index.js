import React from "react";
import { FiUser, FiHeart } from "react-icons/fi";

import { Container } from "./styles";

export default function TopInfo() {
  return (
    <Container>
      <span>
        <FiHeart />
        <b>20</b>
      </span>
      <span>
        <FiUser />
        Jeniffer Carvalho
      </span>
    </Container>
  );
}
