import { SET_OVERVIEW } from "redux/types/views/views.types";

const initialState = {
  overview: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OVERVIEW:
      return { ...state, overview: action.payload };

    default:
      return state;
  }
};

export default reducer;
