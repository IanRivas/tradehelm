import React from "react";
import {render, screen} from "@testing-library/react";

import App from "./App";

test("renders intro text", () => {
  render(<App />);

  const PageTitle = screen.getByText("Supermarket list");

  expect(PageTitle).toBeInTheDocument();
});
