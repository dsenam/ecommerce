
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Button from "."; 
import { theme } from "../../../styles/theme";


describe("Button Component", () => {
  it("calls onClick function when clicked", () => {
    const label = "Click me!";
    const onClickMock = jest.fn(); 

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button label={label} onClick={onClickMock} />
      </ThemeProvider>
    );

    const button = getByText(label);


    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
