import { combineReducers } from "redux";
import BusinessReducer from "./business.reducer";
import BusinessPerson from "./businessPerson.reducer";
import Modal from "./modal/modal.reducer";
import Views from "./views/views.reducer";

export default combineReducers({
  business: BusinessReducer,
  businessPerson: BusinessPerson,
  modal: Modal,
  views: Views,
});
