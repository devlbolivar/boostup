import { types } from "../types/types";
const initialState = {
  loading: true,
};

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.onLoader:
      return { ...state, loading: true };
    case types.offLoader:
      return { ...state, loading: false };
    default:
      return state;
  }
};
