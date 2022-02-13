import {
  SET_BUSINESS,
  EDIT_BUSINESS,
  DELETE_BUSINESS,
  SET_TYPE_MODAL,
  SET_CURRENT_ID,
  CLEAR_CURRENT_ID,
} from "../types/business.types";

const initialState = {
  business: [],
  typeModal: "",
  currentBusiness: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUSINESS:
      return { ...state, business: action.payload };
    case SET_TYPE_MODAL:
      return { ...state, typeModal: action.payload };
    case SET_CURRENT_ID: {
      const currentBusiness = state.business.find(
        ({ businessId }) => businessId === action.payload
      );
      return { ...state, currentBusiness };
    }
    case EDIT_BUSINESS: {
      const editingBusiness = action.payload;
      const business = state.business.map((business) =>
        business.businessId === editingBusiness.businessId
          ? editingBusiness
          : business
      );
      return { ...state, business, currentBusiness: null };
    }
    case CLEAR_CURRENT_ID:
      return { ...state, currentBusiness: null };

    case DELETE_BUSINESS: {
      const business = state.business.filter(
        ({ businessId }) => businessId !== action.payload
      );
      return { ...state, business, currentBusiness: null };
    }
    default:
      return state;
  }
};

export default reducer;
