import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components"; 
import GridContainer from "."; 
import { theme } from "../../../styles/theme";


describe("GridContainer Component", () => {
  it("renders children correctly", () => {
    const labelText = "Hello, world!";
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <GridContainer>
          <span>{labelText}</span>
        </GridContainer>
      </ThemeProvider>
    );


    expect(getByText(labelText)).toBeInTheDocument();
  });
});