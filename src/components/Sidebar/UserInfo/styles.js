import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  img {
    margin-right: 10px;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    border: 1px solid #bbb;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: var(--primary);
    font-size: 12px;
  }
`;
