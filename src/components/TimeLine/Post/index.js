import React from "react";

import { Container, User, PostImage } from "./styles";

export default function Post(props) {
  return (
    <Container>
      <header>
        <img src={props.content.userPicture} alt="user" />
        <User>
          <strong>{props.content.user}</strong>
          {props.content.location !== undefined && (
            <span>{props.content.location}</span>
          )}
        </User>
      </header>
      <PostImage>
        <img src={props.content.postPicture} alt="post" />
      </PostImage>
      <p>{props.content.description}</p>
    </Container>
  );
}
