import styled from "styled-components";
import { ThemeProvider } from "./styles/ThemeProvider";
import GlobalStyles from "./styles/global";
import Navbar from "./components/Navbar";
import Statistics from "./Statistics";

const StatisticsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0% 5% 0% 5%;
`;

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <StatisticsWrapper>
        <Statistics />
      </StatisticsWrapper>
    </ThemeProvider>
  );
}

export default App;
