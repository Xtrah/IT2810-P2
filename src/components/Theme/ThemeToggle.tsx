import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import ThemeTypes from "../../utils/themeutils";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () =>
    theme === ThemeTypes.LIGHT
      ? setTheme(ThemeTypes.DARK)
      : setTheme(ThemeTypes.LIGHT);

  return (
    <button onClick={toggleTheme} aria-label="Toggle color-mode" type="button">
      Toggle
    </button>
  );
};

export default ThemeToggle;
