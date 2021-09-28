import styled from "styled-components";
import { PersonCircle } from "@styled-icons/bootstrap/PersonCircle";
import { CheckCircle } from "@styled-icons/bootstrap/CheckCircle";
import { ExclamationCircle } from "@styled-icons/bootstrap/ExclamationCircle";
import { ChangeEvent, useState } from "react";
import Section from "./components/Section";
import { Commit, Issue } from "./types/gitlabDataTypes";
import getUniqueCommitContributors from "./utils/getUniqueCommitContributors";

const DataParagraph = styled.p`
  display: inline;
  font-size: 18px;
  font-weight: 600;
`;

const SummaryTitle = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  margin: 0;
  margin-bottom: 1em;
`;

const SummaryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  & li {
    margin: 1em 0;
  }
`;

const CheckIcon = styled(CheckCircle)`
  vertical-align: sub;
  fill: ${({ theme }) => theme.primary};
`;

const UserIcon = styled(PersonCircle)`
  vertical-align: sub;
  fill: ${({ theme }) => theme.primary};
`;

const ExclamationIcon = styled(ExclamationCircle)`
  vertical-align: sub;
  fill: ${({ theme }) => theme.primary};
`;

const KeyNumber = styled.span`
  color: ${({ theme }) => theme.primary};
  margin: 0 0.2em;
  font-size: 34px;
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
  const [dateOption, setDateOption] = useState("99999");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newVal = e.target.value;
    setDateOption(newVal);
    onChange(parseInt(newVal, 10));
  };

  return (
    <Section>
      <SummaryTitle>Current status of repository</SummaryTitle>
      <SummaryList>
        <li>
          <ExclamationIcon size={34} />
          <DataParagraph>
            <KeyNumber>{issuesData.length}</KeyNumber>Total issues
          </DataParagraph>
        </li>
        <li>
          <CheckIcon size={34} />
          <DataParagraph>
            <KeyNumber>{commitsData.length}</KeyNumber>Total commits
          </DataParagraph>
        </li>
        <li>
          <UserIcon size={34} />
          <DataParagraph>
            <KeyNumber>
              {getUniqueCommitContributors(commitsData).length}
            </KeyNumber>
            Total contributors
          </DataParagraph>
        </li>
      </SummaryList>

      <Text>Data from </Text>
      <select value={dateOption} onChange={handleChange}>
        <option value="99999">all time</option>
        <option value="30">last 30 days</option>
        <option value="14">last 14 days</option>
        <option value="7">last 7 days</option>
      </select>
    </Section>
  );
}

export default StatisticsSummary;
