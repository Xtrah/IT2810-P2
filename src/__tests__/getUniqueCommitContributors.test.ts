import getUniqueCommitContributors from "../utils/getUniqueCommitContributors";

describe("getUniqueCommitContributors", () => {
  test("it should return unique names from a data list", () => {
    const input = [
      { author_name: "user1", created_at: "" },
      { author_name: "user1", created_at: "" },
      { author_name: "user2", created_at: "" },
      { author_name: "user3", created_at: "" },
    ];

    const output = ["user1", "user2", "user3"];

    expect(getUniqueCommitContributors(input)).toEqual(output);
  });
});
