import React, { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeTypes } from "../types/themeTypes";
import useLocalStorage from "../utils/useLocalStorage";
import { lightTheme, darkTheme } from "./ThemeStyles";

export interface IThemeContext {
  theme: string;
  // Eslint throwing errors because of unused interface parameter is a bug
  // eslint-disable-next-line no-unused-vars
  setTheme(themeValue: ThemeTypes): void;
}

const ThemeContext = React.createContext({} as IThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useLocalStorage<ThemeTypes>(
    "themeMode",
    ThemeTypes.LIGHT
  );

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <StyledThemeProvider
        theme={theme === ThemeTypes.LIGHT ? lightTheme : darkTheme}
      >
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
