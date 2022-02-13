import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { breakpoints } from "styles/breakpoints";
import { colors } from "styles/color";
import { fontFamilies } from "styles/fonts";
import GlobalStylesStyled from "styles/GlobalStyles.styled";

const theme = {
  breakpoints,
  fonts: fontFamilies,
  colors,
};

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStylesStyled />
      {children}
    </ThemeProvider>
  );
}
