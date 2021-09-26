import { ThemeProvider } from './components/Theme/ThemeProvider';
import { GlobalStyles } from './global';
import ThemeToggle from "./components/Theme/ThemeToggle";


function App() {
  return (
    <ThemeProvider>
        <>
          <GlobalStyles />
          <ThemeToggle/>
          <h1>Bolle-title</h1>
        </>
    </ThemeProvider>
  );
}

export default App;
