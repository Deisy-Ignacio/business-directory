import {
  SET_OPEN_MODAL,
  SET_TYPE_MODAL,
} from "../../../redux/types/Modal/modal.types";

export const setTypeModal = (type) => ({
  type: SET_TYPE_MODAL,
  payload: type,
});

export const setOpenModal = (open) => ({
  type: SET_OPEN_MODAL,
  payload: open,
});
