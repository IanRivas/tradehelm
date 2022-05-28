import React from "react";
import {render} from "@testing-library/react";

import ListProvider from "../../Context/ListProvider";

import Item from "./Item";

describe("<Item />", () => {
  test("render", () => {
    const initialValue = {
      id: "alkjskldf1",
      item: "Helado",
    };
    const initialValue2 = {
      id: "mock123",
      item: "Queso",
    };

    const component = render(
      <ListProvider>
        <Item listItem={initialValue} />
        <Item listItem={initialValue2} />
      </ListProvider>,
    );

    const item1 = component.getByText("Helado");
    const item2 = component.getByText("Queso");

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });
});
