import { SET_OVERVIEW } from "redux/types/views/views.types";

export const setOverview = (view) => ({
  type: SET_OVERVIEW,
  payload: view,
});
