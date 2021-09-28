import { useContext } from "react";
import { ThemeContext } from "../components/Theme/ThemeProvider";
import { darkTheme, lightTheme } from "../components/Theme/ThemeStyles";
import { Commit } from "../types/gitlabDataTypes";
import { Series } from "../types/highchartsTypes";
import getUniqueCommitContributors from "./getUniqueCommitContributors";
import ThemeTypes from "./themeTypes";

const countCommitsPerName = (commitsData: Commit[]): Series => {
  // Per unique name, count contribution.
  const commitSeries = getUniqueCommitContributors(commitsData).map(
    (username: string) => ({
      name: username,
      data: [
        commitsData.filter((commit: Commit) => commit.author_name === username)
          .length,
      ],
    })
  );

  return commitSeries;
};

const getChartOptionsCommitsPerUser = (commitsData: Commit[]) => {
  const { theme } = useContext(ThemeContext);
  const ThemeStyles = theme === ThemeTypes.LIGHT ? lightTheme : darkTheme;

  const chartOptionsCommitsPerUser = {
    chart: {
      type: "column",
      backgroundColor: ThemeStyles.card,
      color: ThemeStyles.text,
    },
    title: {
      text: "Commits",
      style: {
        color: ThemeStyles.text,
        fontFamily: ThemeStyles.font,
      },
    },
    xAxis: {
      categories: ["Users"],
      labels: {
        style: {
          color: ThemeStyles.text,
          fontFamily: ThemeStyles.font,
        },
      },
    },
    yAxis: {
      labels: {
        style: {
          color: ThemeStyles.text,
          fontFamily: ThemeStyles.font,
        },
      },
      title: {
        style: {
          color: ThemeStyles.text,
          fontFamily: ThemeStyles.font,
        },
        text: "Commits",
      },
    },
    legend: {
      itemStyle: {
        color: ThemeStyles.text,
        fontFamily: ThemeStyles.font,
      },
    },
    colors: [ThemeStyles.primary],
    series: countCommitsPerName(commitsData),
    plotOptions: {
      series: {
        borderWidth: 0,
        shadow: {
          color: "rgba(0,0,0,1)",
          offsetX: 0,
          offsetY: 0,
          opacity: 0.05,
          width: 5,
        },
      },
    },
  };

  return chartOptionsCommitsPerUser;
};

export default getChartOptionsCommitsPerUser;
