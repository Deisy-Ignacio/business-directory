import {
  SET_MAIN_VIEW,
  SET_OVERVIEW,
  SHOW_MENU,
} from "redux/types/views/views.types";

export const setOverview = (view) => ({
  type: SET_OVERVIEW,
  payload: view,
});

export const setMainView = (view) => ({
  type: SET_MAIN_VIEW,
  payload: view,
});

export const displayMenu = (menu) => ({
  type: SHOW_MENU,
  payload: menu,
});
