import styled from "styled-components";

export const ButtonStyled = styled.button<{ $primary?: boolean }>`
  background: ${(props) =>
    props.$primary ? props.theme.color.primary : props.theme.color.secondary};
  color: ${(props) =>
    props.$primary ? props.theme.color.secondary : props.theme.color.primary};
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-size: 1rem;
  padding: 0.6rem 1rem;
`;
