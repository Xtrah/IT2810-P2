import { ThemeProvider } from './components/Theme/ThemeProvider';
import { GlobalStyles } from './global';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider>
        <>
          <GlobalStyles />
          <Navbar/>
          <h1>Bolle-title</h1>
        </>
    </ThemeProvider>
  );
}

export default App;
