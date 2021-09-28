import React, { useState, ReactNode, SetStateAction, Dispatch } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import ThemeTypes from "../../types/themeTypes";
import { lightTheme, darkTheme } from "../../styles/ThemeStyles";

export interface IThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<ThemeTypes>>;
}

const ThemeContext = React.createContext({} as IThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(ThemeTypes.LIGHT);

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
