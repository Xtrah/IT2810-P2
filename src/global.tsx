import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './ThemeType';


export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`

*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
    align-items: center;
    display: flex;
    background: ${({ theme }) => theme.body};
    color: ${(props) => props.theme.text};
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
}
`;

