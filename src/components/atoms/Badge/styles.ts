import styled from "styled-components";

export const BadgeContainerStyled = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;

  span {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
    border-radius: 50%;
    padding: 2px 8px;
    font-size: 1rem;
  }
`;
