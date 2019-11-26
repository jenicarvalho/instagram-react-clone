import React from "react";

import { Container, User, Image } from "./styles";

export default function Storie(props) {
  return (
    <Container>
      <Image>
        <img src={props.content.userPicture} alt="user" />
      </Image>
      <User>
        <strong>{props.content.user}</strong>
        <span>{props.content.time}</span>
      </User>
    </Container>
  );
}
