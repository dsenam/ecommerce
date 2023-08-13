import { ReactElement } from 'react';
import { CenterContainerStyled } from './styles';

interface CenterContainerProps {
    children:ReactElement | ReactElement[]
    
}

const CenterContainer = ({children}:CenterContainerProps ) => {
  return (
    <CenterContainerStyled>
        {children}
    </CenterContainerStyled>
  )
}

export default CenterContainer;