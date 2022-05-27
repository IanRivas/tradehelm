import React, {useReducer, useContext, createContext} from "react";
import {v4} from "uuid";

import {ListActionType} from "../type";
import type {ListState} from "../type";

import appReducer from "./appReducer";

type contextType = {
  state: ListState[];
  addItem: (item: string) => void;
  editItem: (id: string, item: string) => void;
  deleteItem: (id: string) => void;
};

const defaultState = {} as contextType;

const listContext = createContext<contextType>(defaultState);

// const initialList = [
//   {id: "dlkjlfa1", item: "helado"},
//   {id: "lfajldjf12", item: "cerveza"},
// ];

const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function ListProvider({children}: {children: React.ReactNode}): JSX.Element {
  const localStorageList = JSON.parse(localStorage.getItem("list") || "[]");

  const [state, dispatch] = useReducer(appReducer, localStorageList);

  const addItem = async (item: string) => {
    await waitFor(500);
    dispatch({type: ListActionType.ADD, payload: {id: v4(), item}});
  };
  const editItem = async (id: string, item: string) => {
    await waitFor(500);
    dispatch({type: ListActionType.EDIT, payload: {id, item}});
  };
  const deleteItem = async (id: string) => {
    await waitFor(500);
    dispatch({type: ListActionType.DELETE, payload: {id, item: ""}});
  };

  return (
    <listContext.Provider value={{state, addItem, editItem, deleteItem}}>
      {children}
    </listContext.Provider>
  );
}

export const useList = (): contextType => useContext(listContext);
