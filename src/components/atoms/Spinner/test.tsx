
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Spinner from "."; 
import { theme } from "../../../styles/theme";

describe("Spinner Component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Spinner />
      </ThemeProvider>
    );

 
    expect(container.firstChild).toBeInTheDocument();
  });
});