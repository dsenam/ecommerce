
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Input from "."; 
import { theme } from "../../../styles/theme"; 

describe("Input Component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Input />
      </ThemeProvider>
    );


    expect(container.querySelector("input")).toBeInTheDocument();
  });

  it("passes attributes correctly", () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Input data-testid="input" onChange={mockOnChange} />
      </ThemeProvider>
    );

    const inputElement = getByTestId("input") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Test Value" } });

    expect(mockOnChange).toHaveBeenCalled();
    expect(inputElement.value).toBe("Test Value");
  });
});