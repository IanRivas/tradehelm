import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";

import Button from "./Button";

describe("<Button />", () => {
  test("render", () => {
    render(<Button text="Add" type="primary" onClick={() => null} />);
    const button = screen.getByText("Add");

    expect(button).toBeInTheDocument();
  });
  test("button click", () => {
    const mockHandler = jest.fn();

    const component = render(<Button text="Add" type="primary" onClick={mockHandler} />);

    const button = component.getByText("Add");

    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
