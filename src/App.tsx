import React from "react";
import Children from "./Children";

const themes = {
  light: {
    foreground: "#000",
    background: "#fff"
  },
  dark: {
    foreground: "#fff",
    background: "#000"
  }
};

export const ThemeContext = React.createContext(themes);


function App() {
  return (

    <ThemeContext.Provider value={themes}> {/* wrapper Component */}
      <Children />
    </ThemeContext.Provider>
  );
}

export default App;
