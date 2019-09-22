import React from "react";

import { Container, User, PostImage } from "./styles";

export default function Post() {
  return (
    <Container>
      <header>
        <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="user" />
        <User>
          <strong>Max Goulart</strong>
          <span>Château de Vianden</span>
        </User>
      </header>
      <PostImage>
        <img
          src="https://instagram.fcpq4-1.fna.fbcdn.net/vp/001f8d8336d7f0848ea869f5b8b9af6a/5E374FE7/t51.2885-15/sh0.08/e35/s640x640/69882750_130088278326589_2566948334102309039_n.jpg?_nc_ht=instagram.fcpq4-1.fna.fbcdn.net&_nc_cat=1"
          alt="post"
        />
      </PostImage>
    </Container>
  );
}
