export enum ListActionType {
  ADD = "ADD-ITEM",
  UPDATE = "UPDATE-ITEM",
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
