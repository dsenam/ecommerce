import React, { ReactElement } from "react";
import { Header } from "../../components/organisms/Header";
import { ContainerStyled, ContentStyled } from "./styles";

interface LayoutProps {
  children: ReactElement;
  title: string;
}

export const LayoutTemplate = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Header />
      <ContainerStyled>
        <ContentStyled>
          <h1>{title}</h1>
          {children}
        </ContentStyled>
      </ContainerStyled>
    </>
  );
};
