import {ListActionType} from "../type";
import type {ListAction, ListState} from "../type";

export default function appReducer(state: ListState[], action: ListAction): ListState[] {
  switch (action.type) {
    case ListActionType.ADD:
      return [...state, action.payload];
    case ListActionType.EDIT: {
      const edited = state.map((value) => {
        if (value.id === action.payload.id) {
          return {...value, item: action.payload.item};
        }

        return value;
      });

      return edited;
    }
    case ListActionType.DELETE: {
      const deleted = state.filter((value) => value.id !== action.payload.id);

      return deleted;
    }
    default:
      return state;
  }
}
