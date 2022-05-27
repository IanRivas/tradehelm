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

export default function ListProvider({children}: {children: React.ReactNode}): JSX.Element {
  const [state, dispatch] = useReducer(appReducer, []);

  const addItem = (item: string) => {
    dispatch({type: ListActionType.ADD, payload: {id: v4(), item}});
  };
  const editItem = (id: string, item: string) => {
    dispatch({type: ListActionType.EDIT, payload: {id, item}});
  };
  const deleteItem = (id: string) => {
    dispatch({type: ListActionType.DELETE, payload: {id, item: ""}});
  };

  return (
    <listContext.Provider value={{state, addItem, editItem, deleteItem}}>
      {children}
    </listContext.Provider>
  );
}

export const useList = (): contextType => useContext(listContext);
