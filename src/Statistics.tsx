import styled from "styled-components";
import { useEffect, useState } from "react";
import Charts from "./Charts";
import getGitlabData from "./utils/getGitlabData";
import { Commit, Issue } from "./types/gitlabDataTypes";
import StatisticsSummary from "./StatisticsSummary";
import filterDataOnDate from "./utils/filterDataOnDate";
import useSessionStorage from "./utils/useSessionStorage";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  @media (min-width: 1060px) {
    flex-direction: row;
  }
`;

function Statistics() {
  const [issuesData, setIssuesData] = useState<Issue[]>([]);
  const [commitsData, setCommitsData] = useState<Commit[]>([]);
  const [filteredCommitsData, setFilteredCommitsData] = useState<Commit[]>([]);
  const [filteredIssuesData, setFilteredIssuesData] = useState<Issue[]>([]);
  const initialDaysToInclude = "99999";
  const [daysToIncludeData] = useSessionStorage(
    "daysToInclude",
    initialDaysToInclude
  );

  useEffect(() => {
    const fetchAndSetData = async () => {
      const issues: Issue[] = await getGitlabData("/issues");
      const commits: Commit[] = await getGitlabData("/repository/commits");
      // Set all fetched data
      setIssuesData(issues);
      setCommitsData(commits);
      // Set the data which is displayed
      setFilteredCommitsData(
        filterDataOnDate(commits, parseInt(daysToIncludeData, 10))
      );
      setFilteredIssuesData(
        filterDataOnDate(issues, parseInt(daysToIncludeData, 10))
      );
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
