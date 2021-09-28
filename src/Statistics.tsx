import styled from "styled-components";
import { useEffect, useState } from "react";
import Charts from "./Charts";
import getGitlabData from "./utils/getGitlabData";
import { Commit, Issue } from "./types/gitlabDataTypes";
import StatisticsSummary from "./StatisticsSummary";
import filterDataOnDate from "./utils/filterDataOnDate";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

function Statistics() {
  const [issuesData, setIssuesData] = useState<Issue[]>([]);
  const [commitsData, setCommitsData] = useState<Commit[]>([]);
  const [filteredCommitsData, setFilteredCommitsData] = useState<Commit[]>([]);
  const [filteredIssuesData, setFilteredIssuesData] = useState<Issue[]>([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
      const issues = await getGitlabData("/issues");
      const commits = await getGitlabData("/repository/commits");
      // Set all fetched data
      setIssuesData(issues);
      setCommitsData(commits);
      // Set the data which is displayed
      setFilteredIssuesData(issues);
      setFilteredCommitsData(commits);
    };

    fetchAndSetData();
  }, []);

  const handleDateChange = (daysToIncludeDataFrom: number) => {
    setFilteredCommitsData(
      filterDataOnDate(commitsData, daysToIncludeDataFrom)
    );
    setFilteredIssuesData(filterDataOnDate(issuesData, daysToIncludeDataFrom));
  };

  return (
    <FlexContainer>
      <StatisticsSummary
        issuesData={filteredIssuesData}
        commitsData={filteredCommitsData}
        onChange={handleDateChange}
      />
      <Charts
        issuesData={filteredIssuesData}
        commitsData={filteredCommitsData}
      />
    </FlexContainer>
  );
}

export default Statistics;
