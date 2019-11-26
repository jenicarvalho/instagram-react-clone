import React, { Component } from "react";
import { UserContext } from "../../context/userProvider";
import { FiUser, FiHeart } from "react-icons/fi";
import { Container } from "./styles";

export default class TopInfo extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {userInfo => (
          <Container>
            <span>
              <FiHeart />
              <b>{userInfo.likes}</b>
            </span>
            <span>
              <FiUser />
              {userInfo.name}
            </span>
          </Container>
        )}
      </UserContext.Consumer>
    );
  }
}
