import { useContext } from "react";
import { ThemeContext } from "../styles/ThemeProvider";
import { darkTheme, lightTheme } from "../styles/ThemeStyles";
import { Issue } from "../types/gitlabDataTypes";
import { ThemeTypes } from "../types/themeTypes";

const getChartOptionsIssuesStatus = (issuesData: Issue[]) => {
  const { theme } = useContext(ThemeContext);
  const ThemeStyles = theme === ThemeTypes.LIGHT ? lightTheme : darkTheme;

  const chart = {
    chart: {
      type: "column",
      backgroundColor: ThemeStyles.card,
      color: ThemeStyles.text,
    },
    title: {
      text: "Issue status",
      style: {
        color: ThemeStyles.text,
        fontFamily: ThemeStyles.font,
      },
    },
    xAxis: {
      labels: {
        style: {
          color: ThemeStyles.text,
          fontFamily: ThemeStyles.font,
        },
      },
      categories: ["Issue status"],
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
        text: "Issues",
      },
    },
    legend: {
      itemStyle: {
        color: ThemeStyles.text,
        fontFamily: ThemeStyles.font,
      },
    },
    colors: [ThemeStyles.primary, ThemeStyles.primaryDark],
    series: [
      {
        name: "Open",
        data: [
          issuesData.filter((issue: Issue) => issue.closed_at === null).length,
        ],
      },
      {
        name: "Closed",
        data: [
          issuesData.filter((issue: Issue) => issue.closed_at !== null).length,
        ],
      },
    ],
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
  return chart;
};

export default getChartOptionsIssuesStatus;
