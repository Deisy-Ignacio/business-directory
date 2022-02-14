import { SET_OPEN_MODAL, SET_TYPE_MODAL } from "../../types/modal/modal.types";

const initialState = {
  typeModal: "",
  openModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE_MODAL:
      return { ...state, typeModal: action.payload };

    case SET_OPEN_MODAL:
      return { ...state, openModal: action.payload };

    default:
      return state;
  }
};
export default reducer;
