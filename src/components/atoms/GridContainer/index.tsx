import { ReactElement } from "react";

import { GridContainerStyled } from "./styles";
import ProductCard from "../../molecules/ProductCard";

interface GridContainerProps {
  children: ReactElement
}

export const GridContainer = ({children}: GridContainerProps) => {
  return <GridContainerStyled>{children}</GridContainerStyled>;
};

export default GridContainer;
