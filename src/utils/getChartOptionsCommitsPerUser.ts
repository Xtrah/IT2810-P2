import { Commit } from '../types/gitlabDataTypes';
import { Series } from '../types/highchartsTypes';
import { getUniqueCommitContributors } from './getUniqueCommitContributors';

export const getChartOptionsCommitsPerUser = (commitsData: Commit[]) => {
  const chartOptionsCommitsPerUser = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Commits',
    },
    xAxis: {
      categories: ['Users'],
    },
    yAxis: {
      title: {
        text: 'Commits',
      },
    },
    colors: ['orange'],
    series: countCommitsPerName(commitsData),
  };

  return chartOptionsCommitsPerUser;
};

const countCommitsPerName = (commitsData: Commit[]): Series => {
  // Per unique name, count contribution.
  const commitSeries = getUniqueCommitContributors(commitsData).map(
    (username: string) => ({
      name: username,
      data: [
        commitsData.filter((commit: Commit) => commit.author_name === username)
          .length,
      ],
    })
  );

  return commitSeries;
};
