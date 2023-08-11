import styled from "styled-components";

export const HeaderStyled = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 250px;
  }
`;
