import styled from 'styled-components';

export const ListItemStyled = styled.li`
  width: '100%';
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  margin: 1rem;

  div {
    margin-right: 10px;

    span {
      cursor: pointer;
    }

    
  }

  img {
    width: 50px;
  }

  h2 {
    font-size: 1rem;
  }

  svg {
      color: red;
      
    }
`;
