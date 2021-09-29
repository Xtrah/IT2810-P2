import renderer from "react-test-renderer";
import StatisticsSummary from "../StatisticsSummary";
import { Commit, Issue } from "../types/gitlabDataTypes";

// Inspired by https://blog.openreplay.com/react-snapshot-testing-with-jest-an-introduction-with-examples

// eslint-disable-next-line no-unused-vars
function unusedFunctionForTestingPurposes(num: number) {}

describe("<StatisticsSummary />", () => {
  it("should render summary with 0 total commits, contributors and issues when empty lists of data", () => {
    const issuesData: Issue[] = [];
    const commitsData: Commit[] = [];

    const elem = renderer
      .create(
        <StatisticsSummary
          issuesData={issuesData}
          commitsData={commitsData}
          onChange={() => unusedFunctionForTestingPurposes(7)}
        />
      )
      .toJSON();

    expect(elem).toMatchSnapshot();
  });

  it("should render summary with correct count when lists of data", () => {
    const issuesData: Issue[] = [
      { closed_at: "2021-09-21T12:33:09.076+02:00", created_at: "" },
      { closed_at: null, created_at: "" },
      { closed_at: "2021-09-21T12:33:09.076+02:00", created_at: "" },
    ];
    const commitsData: Commit[] = [
      { author_name: "user1", created_at: "" },
      { author_name: "user1", created_at: "" },
      { author_name: "user2", created_at: "" },
      { author_name: "user3", created_at: "" },
    ];

    const elem = renderer
      .create(
        <StatisticsSummary
          issuesData={issuesData}
          commitsData={commitsData}
          onChange={() => unusedFunctionForTestingPurposes(7)}
        />
      )
      .toJSON();

    expect(elem).toMatchSnapshot();
  });
});
