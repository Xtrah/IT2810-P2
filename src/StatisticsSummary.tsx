import CheckIcon from './components/CheckIcon';
import ColoredSpan from './components/ColoredSpan';
import DataParagraph from './components/DataParagraph';
import ExclamationIcon from './components/ExclamationIcon';
import Section from './components/Section';
import SummaryList from './components/SummaryList';
import SummaryTitle from './components/SummaryTitle';
import UserIcon from './components/UserIcon';
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

export default StatisticsSummary;
