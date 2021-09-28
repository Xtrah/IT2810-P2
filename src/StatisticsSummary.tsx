import styled from "styled-components";
import { PersonCircle } from "@styled-icons/bootstrap/PersonCircle";
import { CheckCircle } from "@styled-icons/bootstrap/CheckCircle";
import { ExclamationCircle } from "@styled-icons/bootstrap/ExclamationCircle";
import { ChangeEvent } from "react";
import Section from "./components/Section";
import { Commit, Issue } from "./types/gitlabDataTypes";
import getUniqueCommitContributors from "./utils/getUniqueCommitContributors";
import useSessionStorage from "./utils/useSessionStorage";

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

const Text = styled.p`
  margin-bottom: 4px;
`;

interface Props {
  issuesData: Issue[];
  commitsData: Commit[];
  // eslint-disable-next-line no-unused-vars
  onChange: (dateOption: number) => void;
}

function StatisticsSummary({ issuesData, commitsData, onChange }: Props) {
  const initialDaysToInclude = "99999";
  const [daysToIncludeData, setDaysToIncludeData] = useSessionStorage(
    "daysToInclude",
    initialDaysToInclude
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newVal = e.target.value;
    onChange(parseInt(newVal, 10));
    setDaysToIncludeData(newVal);
  };

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

      <Text>Data from </Text>
      <select value={daysToIncludeData} onChange={handleChange}>
        <option value="99999">all time</option>
        <option value="30">last 30 days</option>
        <option value="14">last 14 days</option>
        <option value="7">last 7 days</option>
      </select>
    </Section>
  );
}

export default StatisticsSummary;
