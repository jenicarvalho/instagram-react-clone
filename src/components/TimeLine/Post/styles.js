import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 50px;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  overflow: hidden;

  header {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 16px;

    img {
      border-radius: 100%;
      border: 1px solid #bbb;
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 14px;
    line-height: 18px;
  }
  span {
    font-size: 12px;
    display: block;
  }
`;

export const PostImage = styled.div`
  line-height: 0;
  img {
    width: 100%;
    height: 100%;
  }
`;
