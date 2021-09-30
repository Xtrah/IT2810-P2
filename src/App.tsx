
import React from "react";
import { ThemeProvider } from "./styles/ThemeProvider";
import GlobalStyles from "./styles/global";
import Navbar from "./components/Navbar";
import getGitlabData from "./utils/getGitlabData";
import Statistics from "./components/Statistics";
import { Commit, Issue } from "./types/gitlabDataTypes";


interface State {
  issuesData: Issue[];
  commitsData: Commit[];
}

class App extends React.Component<null, State> {
  constructor(props: null) {
    super(props);
    this.state = {
      issuesData: [],
      commitsData: [],
    };
  }

  componentDidMount() {
    const fetchAndSetData = async () => {
      const issues: Issue[] = await getGitlabData("/issues");
      const commits: Commit[] = await getGitlabData("/repository/commits");

      this.setState({ issuesData: issues, commitsData: commits });
    };
    fetchAndSetData();
  }

  render() {
    const { issuesData, commitsData } = this.state;

    return (
      <ThemeProvider>
        <GlobalStyles />
        <Navbar />
        <Statistics issuesData={issuesData} commitsData={commitsData} />
      </ThemeProvider>
    );
  }
}

export default App;
