import styled from "styled-components";
import { SunFill } from "@styled-icons/bootstrap/SunFill";
import { MoonFill } from "@styled-icons/bootstrap/MoonFill";
import { useContext } from "react";
import { ThemeContext } from "../styles/ThemeProvider";
import ThemeTypes from "../types/themeTypes";

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
      aria-label={
        theme === ThemeTypes.LIGHT ? "Turn on dark mode" : "Turn on light mode"
      }
      type="button"
    >
      {theme === ThemeTypes.LIGHT ? (
        <SunFill size={28} />
      ) : (
        <MoonFill size={28} />
      )}
    </StyledButton>
  );
};

export default ThemeToggle;
