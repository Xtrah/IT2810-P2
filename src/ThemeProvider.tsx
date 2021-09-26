import React, { useState, ReactNode } from "react";
import { lightTheme } from "./theme";
import { ThemeType } from "../utils/themeutils";

export interface IThemeContext {
  theme: ThemeType,
  switchTheme?: () => void
}

const ThemeContext = React.createContext<IThemeContext>({theme : ThemeType.light});

const ThemeProvider = ( children: ReactNode ) => {
  const [theme, setTheme] = useState(ThemeType.light);

  const switchTheme = (theme: ThemeType) => setTheme(theme);

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };