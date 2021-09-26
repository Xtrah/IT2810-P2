import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./components/Theme/ThemeType";

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`

*,
*::after,
*::before {
  box-sizing: border-box;
}

#root{
  width: 100%;
  margin: 0;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
}
`;

export default GlobalStyles;
