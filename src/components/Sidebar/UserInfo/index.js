import React from "react";
import { UserContext } from "../../../context/userProvider";

import { Container, User } from "./styles";

export default function UserInfo() {
  return (
    <UserContext.Consumer>
      {userInfo => (
        <Container>
          <img
            alt="Perfil"
            src="https://randomuser.me/api/portraits/women/25.jpg"
          />
          <User>
            <strong>{userInfo.name}</strong>
            <span>{userInfo.username}</span>
          </User>
        </Container>
      )}
    </UserContext.Consumer>
  );
}
