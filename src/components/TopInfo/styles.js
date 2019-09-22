import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;

    svg {
      font-size: 25px;
      margin: 0 10px;
    }

    + span {
      margin-left: 10px;
      padding-left: 10px;
      border-left: 1px solid rgba(0, 0, 0, 0.175);
    }
  }
`;
