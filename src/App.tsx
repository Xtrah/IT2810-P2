import React, {useState} from "react";
import { lightTheme, darkTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import Navbar from "./Navbar";


function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
      console.log("dark bolle")
    // otherwise, it should be light
    } else {
      setTheme('light');
      console.log("light bolle")
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Navbar toggleTheme={toggleTheme}/>
        {/* <button onClick={toggleTheme}>Toggle theme</button> */}
        <h1>It's a light theme!</h1>
      </>
    </ThemeProvider>
  );
}

export default App;
