
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import List from ".";
import { theme } from "../../../styles/theme";

describe("List Component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <List>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </List>
      </ThemeProvider>
    );

   
    expect(container.querySelectorAll("div")).toHaveLength(3);
  });
});