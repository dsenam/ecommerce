import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import IconButton from ".";
import { theme } from "../../../styles/theme";


describe("IconButton Component", () => {
  it("renders the icon correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <IconButton onClick={() => {}} />
      </ThemeProvider>
    );


    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("calls onClick function when clicked", () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <IconButton onClick={mockOnClick} data-testid="icon-button" />
      </ThemeProvider>
    );


    const iconButton = getByTestId("icon-button");
    iconButton.click();


    expect(mockOnClick).toHaveBeenCalled();
  });
});