import type { Preview } from "@storybook/react";
import {Global, css, ThemeProvider} from '@emotion/react';
import {withThemeFromJSXProvider} from "@storybook/addon-themes";
import {lightTheme} from "../lib/theme";

const GlobalStyles = () => (
    <Global
        styles={css`
      body {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
    `}
/>
);

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: lightTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles, // Adds your GlobalStyles component to all stories
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
