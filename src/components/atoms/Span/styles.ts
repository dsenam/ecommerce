import styled from "styled-components";

export const SpanStyled = styled.span<{$error?: boolean}>`
  font-style: italic;
  color: ${(props) =>
    props.$error ? props.theme.color.error : props.theme.color.primary};
  
`;
