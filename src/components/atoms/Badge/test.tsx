
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Badge from ".";
import { theme } from "../../../styles/theme";
import { rgbToCssColor } from "../../../utils/formats.utils";


describe("Badge Component", () => {
  it("applies correct styles to the badge container", () => {
    const itemCount = 5;
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Badge itemCount={itemCount} />
      </ThemeProvider>
    );

    const cssPrimaryColor = rgbToCssColor(theme.color.primary);
    expect(container.firstChild).toHaveStyle(
      `background-color: ${cssPrimaryColor}`
    );
   
  });
});