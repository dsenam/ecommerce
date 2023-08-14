import styled from "styled-components";

export const ContainerProductStyled = styled.div`
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.5rem;
    
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.2rem;
    font-weight: 700;
  }

  div {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-end;
  }

  button {
    margin-top: 1rem;
    width: 100%;
    
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    margin-top: 0.5rem;
    color: black;
  }
`;

