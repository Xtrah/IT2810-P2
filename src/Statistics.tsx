import styled from "styled-components";
import { useEffect, useState } from "react";
import Charts from "./Charts";
import getGitlabData from "./utils/getGitlabData";
import { Commit, Issue } from "./types/gitlabDataTypes";
import StatisticsSummary from "./StatisticsSummary";

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

  useEffect(() => {
    const fetchAndSetData = async () => {
      setIssuesData(await getGitlabData("/issues"));
      setCommitsData(await getGitlabData("/repository/commits"));
    };

    fetchAndSetData();
  }, []);

  return (
    <FlexContainer>
      <StatisticsSummary issuesData={issuesData} commitsData={commitsData} />
      <Charts issuesData={issuesData} commitsData={commitsData} />
    </FlexContainer>
  );
}

export default Statistics;
