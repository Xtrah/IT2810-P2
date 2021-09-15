import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getChartOptionsCommitsPerUser } from './utils/getChartOptionsCommitsPerUser';
import { getChartOptionsIssuesStatus } from './utils/getChartOptionsIssuesStatus';
import { getGitlabData } from './utils/getGitlabData';
import { Commit, Issue } from './types/gitlabDataTypes';
import { getUniqueCommitContributors } from './utils/getUniqueCommitContributors';
import { ExclamationCircle } from '@styled-icons/bootstrap/ExclamationCircle';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';
import styled from 'styled-components';
import { CheckCircle } from '@styled-icons/bootstrap/CheckCircle';

export default function Charts() {
  const [issuesData, setIssuesData] = useState<Issue[]>([]);
  const [commitsData, setCommitsData] = useState<Commit[]>([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
      setIssuesData(await getGitlabData('/issues'));
      setCommitsData(await getGitlabData('/repository/commits'));
    };

    fetchAndSetData();
  }, []);

  const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  `;

  const Section = styled.section`
    padding: 1em;
    margin: 1em;
    // https://tobiasahlin.com/blog/layered-smooth-box-shadows/
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);
  `;

  const SummaryTitle = styled.h1`
    font-size: 14px;
    color: grey;
    margin: 0;
    margin-bottom: 1em;
  `;

  const SummaryList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  `;

  const ColoredSpan = styled.span`
    color: orange;
    margin: 0.25em;
  `;

  const DataParagraph = styled.p`
    display: inline;
    font-size: 24px;
  `;

  const CenteredExclamationCircle = styled(ExclamationCircle)`
    vertical-align: sub;
  `;

  const CenteredCheckCircle = styled(CheckCircle)`
    vertical-align: sub;
  `;

  const CenteredPersonCircle = styled(PersonCircle)`
    vertical-align: sub;
  `;

  return (
    <FlexContainer>
      <div>
        <Section>
          <SummaryTitle>Current status of repository</SummaryTitle>
          <SummaryList>
            <li>
              <CenteredExclamationCircle size={24} fill="orange" />
              <DataParagraph>
                <ColoredSpan>{issuesData.length}</ColoredSpan>Total issues
              </DataParagraph>
            </li>
            <li>
              <CenteredCheckCircle size={24} fill="orange" />
              <DataParagraph>
                <ColoredSpan>{commitsData.length}</ColoredSpan>Total commits
              </DataParagraph>
            </li>
            <li>
              <CenteredPersonCircle size={24} fill="orange" />
              <DataParagraph>
                <ColoredSpan>
                  {getUniqueCommitContributors(commitsData).length}
                </ColoredSpan>
                Total contributors
              </DataParagraph>
            </li>
          </SummaryList>
        </Section>
      </div>
      <div>
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
      </div>
    </FlexContainer>
  );
}
