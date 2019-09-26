import React, { useContext } from "react";
import UserContext from "../../context/UserContext/context";
import { FiUser, FiHeart } from "react-icons/fi";
import { Container } from "./styles";

export default function TopInfo() {
  const user = useContext(UserContext);

  console.log(user);

  return (
    <Container>
      <span>
        <FiHeart />
        <b>20</b>
      </span>
      <span>
        <FiUser />
        {user.name}
      </span>
    </Container>
  );
}
