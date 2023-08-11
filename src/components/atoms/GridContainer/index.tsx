import { ReactElement } from "react";

import { GridContainerStyled } from "./styles";


interface GridContainerProps {
  children?: ReactElement | ReactElement[]
}

export const GridContainer = ({children}: GridContainerProps) => {
  return <GridContainerStyled>{children}</GridContainerStyled>;
};

export default GridContainer;
