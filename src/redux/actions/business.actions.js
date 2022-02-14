import {
  SET_BUSINESS,
  SET_NEW_BUSINESS,
  EDIT_BUSINESS,
  DELETE_BUSINESS,
  SET_CURRENT_ID,
  CLEAR_CURRENT_ID,
  SET_BUSINESS_VIEW,
  SET_ERROR,
} from "../types/business.types";
import * as BusinessService from "services/business.service";

//
export const setBusiness = (business) => ({
  type: SET_BUSINESS,
  payload: business,
});

export const newBusiness = (business) => ({
  type: SET_NEW_BUSINESS,
  payload: business,
});

export const editBusiness = (business) => ({
  type: EDIT_BUSINESS,
  payload: business,
});

export const deleteBusiness = (businessId) => ({
  type: DELETE_BUSINESS,
  payload: businessId,
});

export const setBusinessView = (view) => ({
  type: SET_BUSINESS_VIEW,
  payload: view,
});

export const setCurrentId = (id) => ({
  type: SET_CURRENT_ID,
  payload: id,
});

export const clearCurrentId = () => ({
  type: CLEAR_CURRENT_ID,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

//
export const getBusiness = () => {
  return async (dispatch) => {
    try {
      const { businesses } = await BusinessService.getBusiness();
      dispatch(setBusiness(businesses));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewBusiness = (business) => {
  return async (dispatch) => {
    try {
      await BusinessService.createBusiness(business);
      await getBusiness()(dispatch);
    } catch (error) {}
  };
};

export const editCurrentBusiness = (business) => {
  return async (dispatch) => {
    try {
      const data = await BusinessService.editBusiness(business);
      dispatch(editBusiness(data));
    } catch (error) {}
  };
};

export const deleteCurrentBusiness = (id) => {
  return async (dispatch) => {
    try {
      await BusinessService.deleteBusiness(id);
      dispatch(deleteBusiness(id));
    } catch (error) {}
  };
};
