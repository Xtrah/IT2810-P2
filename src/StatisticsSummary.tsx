import styled from 'styled-components';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';
import { CheckCircle } from '@styled-icons/bootstrap/CheckCircle';
import { ExclamationCircle } from '@styled-icons/bootstrap/ExclamationCircle';
import Section from './components/Section';
import { Commit, Issue } from './types/gitlabDataTypes';
import { getUniqueCommitContributors } from './utils/getUniqueCommitContributors';

interface Props {
  issuesData: Issue[];
  commitsData: Commit[];
}

function StatisticsSummary({ issuesData, commitsData }: Props) {
  return (
    <Section>
      <SummaryTitle>Current status of repository</SummaryTitle>
      <SummaryList>
        <li>
          <ExclamationIcon size={24} fill="orange" />
          <DataParagraph>
            <ColoredSpan>{issuesData.length}</ColoredSpan>Total issues
          </DataParagraph>
        </li>
        <li>
          <CheckIcon size={24} fill="orange" />
          <DataParagraph>
            <ColoredSpan>{commitsData.length}</ColoredSpan>Total commits
          </DataParagraph>
        </li>
        <li>
          <UserIcon size={24} fill="orange" />
          <DataParagraph>
            <ColoredSpan>
              {getUniqueCommitContributors(commitsData).length}
            </ColoredSpan>
            Total contributors
          </DataParagraph>
        </li>
      </SummaryList>
    </Section>
  );
}

const DataParagraph = styled.p`
  display: inline;
  font-size: 24px;
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

const CheckIcon = styled(CheckCircle)`
  vertical-align: sub;
`;

const UserIcon = styled(PersonCircle)`
  vertical-align: sub;
`;

const ExclamationIcon = styled(ExclamationCircle)`
  vertical-align: sub;
`;

const ColoredSpan = styled.span`
  color: orange;
  margin: 0.25em;
`;

export default StatisticsSummary;
