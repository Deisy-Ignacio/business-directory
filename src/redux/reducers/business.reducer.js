import {
  SET_BUSINESS,
  EDIT_BUSINESS,
  DELETE_BUSINESS,
  SET_CURRENT_ID,
  CLEAR_CURRENT_ID,
  SET_ERROR,
  SET_BUSINESS_VIEW,
} from "../types/business.types";

const initialState = {
  business: [],
  currentBusiness: null,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUSINESS:
      return { ...state, business: action.payload };

    case SET_BUSINESS_VIEW:
      return { ...state, businessView: action.payload };

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

    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
