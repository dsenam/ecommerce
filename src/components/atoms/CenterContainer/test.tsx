import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import CenterContainer from ".";
import { theme } from "../../../styles/theme";

describe("CenterContainer Component", () => {
  it("renders children correctly", () => {
    const labelText = "Hello, world!";
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <CenterContainer>
          <span>{labelText}</span>
        </CenterContainer>
      </ThemeProvider>
    );

    expect(getByText(labelText)).toBeInTheDocument();
  });
});
