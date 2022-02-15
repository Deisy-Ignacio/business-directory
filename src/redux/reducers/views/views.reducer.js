import {
  SET_OVERVIEW,
  SET_MAIN_VIEW,
  SHOW_MENU,
} from "redux/types/views/views.types";

const initialState = {
  overview: false,
  mainView: "HOME",
  isSmallDevice: false,
  showMenu: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OVERVIEW:
      return { ...state, overview: action.payload };

    case SET_MAIN_VIEW:
      return {
        ...state,
        mainView: action.payload,
        overview: false,
      };

    case SHOW_MENU:
      return { ...state, showMenu: action.payload };

    default:
      return state;
  }
};

export default reducer;
