import styled from "styled-components";
import { useEffect, useState } from "react";
import Charts from "./Charts";
import { Commit, Issue } from "../types/gitlabDataTypes";
import StatisticsSummary from "./StatisticsSummary";
import filterDataOnDate from "../utils/filterDataOnDate";
import useSessionStorage from "../utils/useSessionStorage";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  @media (min-width: 1060px) {
    flex-direction: row;
  }
`;

interface Props {
  issuesData: Issue[];
  commitsData: Commit[];
}

function Statistics({ issuesData, commitsData }: Props) {
  const [filteredCommitsData, setFilteredCommitsData] = useState<Commit[]>([]);
  const [filteredIssuesData, setFilteredIssuesData] = useState<Issue[]>([]);
  const initialDaysToInclude = "99999";
  const [daysToIncludeData] = useSessionStorage(
    "daysToInclude",
    initialDaysToInclude
  );

  useEffect(() => {
    // Set the data which is displayed
    setFilteredCommitsData(
      filterDataOnDate(commitsData, parseInt(daysToIncludeData, 10))
    );
    setFilteredIssuesData(
      filterDataOnDate(issuesData, parseInt(daysToIncludeData, 10))
    );
  }, [issuesData, commitsData]);

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
