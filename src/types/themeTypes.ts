/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* NB! Disabled because of eslint bug NB! */
/* https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-am-using-a-rule-from-eslint-core-and-it-doesnt-work-correctly-with-typescript-code */
export enum ThemeTypes {
  DARK = "dark",
  LIGHT = "light",
}

export interface Theme {
  primary: string;
  primaryDark: string;
  body: string;
  card: string;
  text: string;
  toggleBorder: string;
  gradient: string;
  shadow: string;
  font: string;
}
