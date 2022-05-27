export enum ListActionType {
  ADD = "ADD-ITEM",
  EDIT = "EDIT-ITEM",
  DELETE = "DELETE-ITEM",
}

export interface ListAction {
  type: ListActionType;
  payload: ListState;
}

export interface ListState {
  id: string;
  item: string;
}
