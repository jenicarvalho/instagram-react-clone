import React, { Component } from "react";
import { UserContext } from "../../context/userProvider";
import { FiUser, FiHeart } from "react-icons/fi";
import { Container } from "./styles";

export default class TopInfo extends Component {

  render() {
    return (
      <UserContext.Consumer>
        {
          state => (
          <Container>
            <span>
              <FiHeart />
              <b>{state.likes}</b>
            </span>
            <span>
              <FiUser />
              {state.name}
            </span>
          </Container>
          )
        }
      </UserContext.Consumer>
    )
  }
}
