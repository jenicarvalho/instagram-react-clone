import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');

  ${normalize}

  * {
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body, input, button {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    color: #262626;
    font-size: 14px;
    line-height: 20px;
    background: #fafafa;
  }
  a {
    text-decoration: none;
    transition: all 150ms linear 0s;
    color: #000;
  }
  img {
    max-width: 100%;
  }
  :root {
    --primary: #999
  }
`;
