import { combineReducers } from "redux";
import BusinessReducer from "./business.reducer";
import BusinessPerson from "./businessPerson.reducer";
import Modal from "./Modal/modal.reducer";

export default combineReducers({
  business: BusinessReducer,
  businessPerson: BusinessPerson,
  modal: Modal,
});
