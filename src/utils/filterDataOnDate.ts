// Disabled for function overload. https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
import { Commit, Issue } from "../types/gitlabDataTypes";

function filterDataOnDate(data: Commit[], daysToInclude: number): Commit[];
function filterDataOnDate(data: Issue[], daysToInclude: number): Issue[];
function filterDataOnDate(
  data: Commit[] | Issue[],
  daysToInclude: number
): Commit[] | Issue[] {
  const dateToIncludeData =
    new Date().getTime() - daysToInclude * 24 * 60 * 60 * 1000;

  // @ts-ignore Both types should have the key in use. Found alternative, but it's a lot of code, so used ts-ignore https://github.com/microsoft/TypeScript/issues/33591#issuecomment-786443978
  const filteredData = data.filter(
    (dataPoint: Commit | Issue) =>
      new Date(dataPoint.created_at).getTime() > dateToIncludeData
  );

  return filteredData;
}

export default filterDataOnDate;
