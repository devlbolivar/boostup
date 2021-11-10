import { types } from "../types/types";
const initialState = {
  filter: "sevenDays",
};
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setFilter:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
