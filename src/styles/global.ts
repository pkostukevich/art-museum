import { createGlobalStyle } from 'styled-components';
import theme from '@styles/theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'LexendDeca';
    margin: 0;
    background-color: ${theme.colors.lightGrey};
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
