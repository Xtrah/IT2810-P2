import { Commit } from '../types/gitlabDataTypes';

export function getUniqueCommitContributors(commitsData: Commit[]): string[] {
  // Extract the unique names from all the commits
  const allNames = commitsData.map((commits: Commit) => commits.author_name);
  return Array.from(new Set(allNames));
}
