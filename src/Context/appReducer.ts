import {ListActionType} from "../type";
import type {ListAction, ListState} from "../type";

export default function appReducer(state: ListState[], action: ListAction): ListState[] {
  switch (action.type) {
    case ListActionType.ADD: {
      const added = [...state, action.payload];

      localStorage.setItem("list", JSON.stringify(added));

      return added;
    }
    case ListActionType.EDIT: {
      const edited = state.map((value) => {
        if (value.id === action.payload.id) {
          return {...value, item: action.payload.item};
        }

        return value;
      });

      localStorage.setItem("list", JSON.stringify(edited));

      return edited;
    }
    case ListActionType.DELETE: {
      const deleted = state.filter((value) => value.id !== action.payload.id);

      localStorage.setItem("list", JSON.stringify(deleted));

      return deleted;
    }
    default:
      return state;
  }
}
