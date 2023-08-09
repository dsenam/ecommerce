import type { Preview } from "@storybook/react";

import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { theme as themes } from "../src/styles/theme";
import {
  ThemeProvider as Provider,
  createGlobalStyle,
} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }
  
  body {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      themes,
      Provider,
      GlobalStyles,
    }),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
