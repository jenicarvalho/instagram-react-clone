import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 4px 0;
`;

export const Image = styled.div`
  border: 1px solid #ddd;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  overflow: hidden;
  margin-right: 10px;

  img {
    padding: 2px;
    border-radius: 100%;
    width: 100%;
    height: 100%;
  }
`;

export const User = styled.div`
  margin: 5px 0;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 14px;
    line-height: 18px;
  }
  span {
    font-size: 10px;
    display: block;
    color: var(--primary);
    text-transform: uppercase;
  }
`;
