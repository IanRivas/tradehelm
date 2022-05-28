import React from "react";
import {fireEvent, render} from "@testing-library/react";

import ListProvider from "../../Context/ListProvider";

import Modal from "./Modal";

describe("<Modal />", () => {
  test("render", () => {
    const mockHandler = jest.fn();

    const component = render(
      <ListProvider>
        <Modal visible show={mockHandler} />
      </ListProvider>,
    );

    const titulo = component.getByText("Add item");

    expect(titulo).toBeInTheDocument();

    const buttonCancel = component.getByText("Close");

    fireEvent.click(buttonCancel);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
