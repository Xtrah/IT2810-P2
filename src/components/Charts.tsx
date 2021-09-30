import Highcharts from "highcharts";
import styled from "styled-components";
import HighchartsReact from "highcharts-react-official";
import getChartOptionsCommitsPerUser from "../utils/getChartOptionsCommitsPerUser";
import getChartOptionsIssuesStatus from "../utils/getChartOptionsIssuesStatus";
import { Commit, Issue } from "../types/gitlabDataTypes";
import Section from "./Section";

const ChartsWrapper = styled.div`
  flex-grow: 1;

  @media (min-width: 1024px) {
  }
`;

interface Props {
  issuesData: Issue[];
  commitsData: Commit[];
}

// https://www.highcharts.com/docs/getting-started/your-first-chart
function Charts({ issuesData, commitsData }: Props) {
  return (
    <ChartsWrapper>
      <Section>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType="chart"
          options={getChartOptionsIssuesStatus(issuesData)}
        />
      </Section>
      <Section>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType="chart"
          options={getChartOptionsCommitsPerUser(commitsData)}
        />
      </Section>
    </ChartsWrapper>
  );
}

export default Charts;
