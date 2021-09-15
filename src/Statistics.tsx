import Charts from './Charts';
import { useEffect, useState } from 'react';
import { getGitlabData } from './utils/getGitlabData';
import { Commit, Issue } from './types/gitlabDataTypes';
import StatisticsSummary from './StatisticsSummary';
import FlexContainer from './components/FlexContainer';

function Statistics() {
  const [issuesData, setIssuesData] = useState<Issue[]>([]);
  const [commitsData, setCommitsData] = useState<Commit[]>([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
      setIssuesData(await getGitlabData('/issues'));
      setCommitsData(await getGitlabData('/repository/commits'));
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
