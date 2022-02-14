import { combineReducers } from "redux";
import BusinessReducer from "./business.reducer";
import BusinessPerson from "./businessPerson.reducer";
export default combineReducers({
  business: BusinessReducer,
  businessPerson: BusinessPerson,
});
