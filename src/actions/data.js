import { types } from "../types/types";
export const getData = (data) => ({
  type: types.getData,
  payload: data,
});

export const getDataStates = (data) => ({
  type: types.getDataStates,
  payload: data,
});
