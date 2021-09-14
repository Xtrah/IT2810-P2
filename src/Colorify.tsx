import React, { useContext, useState } from "react";
import { ThemeContext } from "./App";

function Colorify() {
    const theme = useContext(ThemeContext);
    const [state, setState] = useState(theme.light);

    const darkMode = () => {
        setState(theme.dark);
    }

    const lightMode = () => {
        setState(theme.light);
    }

    return (
        <>
            <div
                style={{
                    backgroundColor: state.background,
                    color: state.foreground,
                    height: 100,
                    width: 200,
                    margin: 100,
                    border: '1px solid ${state.foreground}' 
                }}
            ></div>
            <button onClick={darkMode}>Dark Mode</button>
            <button onClick={lightMode}>Light Mode</button>
        </>
    );
}


export default Colorify;


