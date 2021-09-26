import styled from "styled-components";
import { SunFill } from "@styled-icons/bootstrap/SunFill";
import { Sun } from "@styled-icons/bootstrap/Sun";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import ThemeTypes from "../../utils/themeutils";

const StyledButton = styled.button`
  border: none;
  text-decoration: none;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 7px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow};
  & * {
    fill: white;
  }
  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
  transition: background-color 0.1s linear;
`;

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () =>
    theme === ThemeTypes.LIGHT
      ? setTheme(ThemeTypes.DARK)
      : setTheme(ThemeTypes.LIGHT);

  return (
    <StyledButton
      onClick={toggleTheme}
      aria-label="Toggle color-mode"
      type="button"
    >
      {theme === ThemeTypes.LIGHT ? <SunFill size={28} /> : <Sun size={28} />}
    </StyledButton>
  );
};

export default ThemeToggle;
