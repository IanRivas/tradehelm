import React from "react";
import {render, fireEvent} from "@testing-library/react";

import ThemeProvider from "../../Context/ThemeProvider";

import ThemeSwitcher from "./ThemeSwitcher";

describe("<ThemeSwitcher />", () => {
  test("render and switch colors", () => {
    const component = render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>,
    );

    const buttonLight = component.getByText("Light");
    const div = component.container.querySelector("div:nth-child(2)");
    const buttonDark = component.getByText("Dark");

    expect(div).toBeInTheDocument();
    expect(div).toHaveStyle("background-color: var(--other-background);");
    fireEvent.click(buttonDark);
    fireEvent.click(buttonLight);
  });
});
