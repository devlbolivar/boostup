import { types } from "../types/types";
const initialState = {
  data: null,
  dataStates: null,
};
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getData:
      return { ...state, data: action.payload };
    case types.getDataStates:
      return { ...state, dataStates: action.payload };
    default:
      return state;
  }
};
