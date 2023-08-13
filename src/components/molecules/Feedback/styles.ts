import styled from 'styled-components';

export const FeedbackContentStyled = styled.div<{
    $success?: boolean;
  }>`
  display: flex;
  flex-direction: column;
 
  h2 {
    font-weight: 400;
    font-size: 2.5rem;
    margin-bottom: 4rem;
    margin-top: 3rem;
  }

  svg {
    font-size: 8rem;
    color: ${(props) => props.$success ? 'green' : 'red'};
  }

  button {
    margin-top: 4rem;
  }
`;
