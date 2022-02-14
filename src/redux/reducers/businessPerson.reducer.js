import {
  SET_BUSINESS_TEAM,
  SET_CURRENT_BUSINNES_PERSON,
  CLEAR_CURRENT_BUSINESS_PERSON,
  DELETE_BUSINESS_PERSON,
} from "../types/businessPerson.types";

const initialState = {
  businessTeam: [],
  currentBusinessPerson: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUSINESS_TEAM:
      return { ...state, businessTeam: action.payload };
    case SET_CURRENT_BUSINNES_PERSON: {
      const currentBusinessPerson = state.businessTeam.find(
        ({ personId }) => personId === action.payload
      );
      return { ...state, currentBusinessPerson };
    }
    case CLEAR_CURRENT_BUSINESS_PERSON:
      return { ...state, currentBusinessPerson: null };
    case DELETE_BUSINESS_PERSON: {
      const businessTeam = state.businessTeam.filter(
        ({ personId }) => personId !== action.payload
      );
      return { ...state, businessTeam, currentBusinessPerson: null };
    }
    default:
      return state;
  }
};

export default reducer;
