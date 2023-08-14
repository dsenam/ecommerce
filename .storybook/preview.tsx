import type { Preview } from "@storybook/react";

import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { theme as themes } from "../src/styles/theme";
import {
  ThemeProvider as Provider,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";
import { MemoryRouter } from 'react-router-dom';
import { theme } from '../src/styles/theme';


import React from "react";

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

const MemoryRouterDecorator = (storyFn) => (
  <MemoryRouter>
    {storyFn()}
  </MemoryRouter>
);




const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      themes,
      Provider,
      GlobalStyles,
    }),
    MemoryRouterDecorator,
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
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
