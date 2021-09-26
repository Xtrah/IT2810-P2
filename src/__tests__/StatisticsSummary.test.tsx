import renderer from "react-test-renderer";
import StatisticsSummary from "../StatisticsSummary";
import { Commit, Issue } from "../types/gitlabDataTypes";

// https://blog.openreplay.com/react-snapshot-testing-with-jest-an-introduction-with-examples

it("should render summary with 0 total commits, contributors and issues when empty lists of data", () => {
  const issuesData: Issue[] = [];
  const commitsData: Commit[] = [];

  const elem = renderer
    .create(
      <StatisticsSummary issuesData={issuesData} commitsData={commitsData} />
    )
    .toJSON();

  expect(elem).toMatchSnapshot();
});

it("should render summary with correct count when lists of data", () => {
  const issuesData: Issue[] = [
    { closed_at: "2021-09-21T12:33:09.076+02:00" },
    { closed_at: null },
    { closed_at: "2021-09-21T12:33:09.076+02:00" },
  ];
  const commitsData: Commit[] = [
    { author_name: "user1" },
    { author_name: "user1" },
    { author_name: "user2" },
    { author_name: "user3" },
  ];

  const elem = renderer
    .create(
      <StatisticsSummary issuesData={issuesData} commitsData={commitsData} />
    )
    .toJSON();

  expect(elem).toMatchSnapshot();
});
