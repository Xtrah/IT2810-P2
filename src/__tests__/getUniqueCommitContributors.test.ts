import getUniqueCommitContributors from "../utils/getUniqueCommitContributors";

describe("Unique contributors", () => {
  test("it should return unique names from a data list", () => {
    const input = [
      { author_name: "user1" },
      { author_name: "user1" },
      { author_name: "user2" },
      { author_name: "user3" },
    ];

    const output = ["user1", "user2", "user3"];

    expect(getUniqueCommitContributors(input)).toEqual(output);
  });
});
