import {
  CLEAR_CURRENT_BUSINESS_PERSON,
  DELETE_BUSINESS_PERSON,
  EDIT_BUSINESS_PERSON,
  SET_BUSINESS_TEAM,
  SET_CURRENT_BUSINNES_PERSON,
} from "redux/types/businessPerson.types";

import * as BusinessPersonService from "services/businessPerson.service";

export const setCurrentBusinessPerson = (id) => ({
  type: SET_CURRENT_BUSINNES_PERSON,
  payload: id,
});

export const clearCurrentBusinessPerson = () => ({
  type: CLEAR_CURRENT_BUSINESS_PERSON,
});

export const setBusinessTeam = (businessTeam) => ({
  type: SET_BUSINESS_TEAM,
  payload: businessTeam,
});

export const editBusinessPerson = (businessPerson) => ({
  type: EDIT_BUSINESS_PERSON,
  payload: businessPerson,
});

export const deleteBusinessPerson = (businessPersonId) => ({
  type: DELETE_BUSINESS_PERSON,
  payload: businessPersonId,
});

export const getBusinessTeam = (id) => {
  return async (dispatch) => {
    try {
      const { persons } = await BusinessPersonService.getBusinessTeam(id);
      dispatch(setBusinessTeam(persons));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewPerson = (businessId, businessPerson) => {
  return async (dispatch) => {
    try {
      await BusinessPersonService.createBusinessPerson(
        businessId,
        businessPerson
      );
      await getBusinessTeam(businessId)(dispatch);
    } catch (error) {}
  };
};

export const editCurrentBusinessPerson = (businessId, businessPerson) => {
  return async (dispatch) => {
    try {
      const data = await BusinessPersonService.editBusinessPerson(
        businessId,
        businessPerson
      );
      dispatch(editBusinessPerson(data));
    } catch (error) {}
  };
};

export const deleteCurrentBusinessPerson = (businessId, id) => {
  return async (dispatch) => {
    try {
      await BusinessPersonService.deleteBusinessPerson(businessId, id);
      dispatch(deleteBusinessPerson(id));
    } catch (error) {}
  };
};
