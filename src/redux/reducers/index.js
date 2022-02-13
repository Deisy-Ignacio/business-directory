import { combineReducers } from "redux";
import BusinessReducer from "./business.reducer";

export default combineReducers({ business: BusinessReducer });
