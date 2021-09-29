import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeToggle from "../components/ThemeToggle";
import { ThemeProvider } from "../styles/ThemeProvider";

// Inspired by https://www.samdawson.dev/article/react-context-testing

describe("<ThemeToggle />", () => {
  it("light mode is on by default and changes to dark mode on click", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    userEvent.click(screen.getByLabelText("Turn on dark mode"));

    expect(screen.getByLabelText("Turn on light mode")).toBeTruthy();
  });
});
