import React from "react";
import {render} from "@testing-library/react";

import ThemeProvider from "../../Context/ThemeProvider";

import Header from "./Header";

describe("<Header />", () => {
  test("render", () => {
    const component = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );

    const buttonLight = component.getByText("Light");
    const buttonDark = component.getByText("Dark");

    expect(buttonLight).toBeInTheDocument();
    expect(buttonDark).toBeInTheDocument();
  });
});
