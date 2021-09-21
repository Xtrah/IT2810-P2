import { Commit } from "../types/gitlabDataTypes";

// Extract the unique names from all the commits
const getUniqueCommitContributors = (commitsData: Commit[]): string[] => {
  const allNames = commitsData.map((commits: Commit) => commits.author_name);
  return Array.from(new Set(allNames));
};

export default getUniqueCommitContributors;
