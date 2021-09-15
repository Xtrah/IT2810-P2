import { Issue } from '../types/gitlabDataTypes';

export const getChartOptionsIssuesStatus = (issuesData: Issue[]) => ({
  chart: {
    type: 'column',
  },
  title: {
    text: 'Issue status',
  },
  xAxis: {
    categories: ['Issue status'],
  },
  yAxis: {
    title: {
      text: 'Issues',
    },
  },
  colors: ['orange'],
  series: [
    {
      name: 'Open',
      data: [
        issuesData.filter((issue: Issue) => issue.closed_at === null).length,
      ],
    },
    {
      name: 'Closed',
      data: [
        issuesData.filter((issue: Issue) => issue.closed_at !== null).length,
      ],
    },
  ],
});
