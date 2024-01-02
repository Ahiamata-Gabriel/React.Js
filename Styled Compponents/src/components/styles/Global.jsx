import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
  box-sizing: border-box;
  margin : 0
}

body {
  background : ${({ theme }) => theme.colors.body};
  color : hsl(192, 100%, 9%)
  font-family : 'poppins', sans-serif;
  font-size: 1.5em;
  margin : 0
}

p {
  opacity: 0.6;
  line-height : 1.5;
}

img {
  max-width: 100%
}

`;
