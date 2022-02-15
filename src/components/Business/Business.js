import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Label from "components/Common/Label/Label";
import Button from "components/Common/Button/Button";
import Title from "components/Common/Title/Title";
import Modal from "components/Common/Modal/Modal";
import CreateEdit from "components/BusinessForm/CreateEdit";
import Delete from "components/BusinessForm/Delete";
import {
  clearCurrentId,
  deleteCurrentBusiness,
  getBusiness,
  setCurrentId,
} from "../../redux/actions/business.actions";
import { MODAL_TYPES, VIEWS } from "utils/data";
import { ReactComponent as EditIcon } from "assets/svgs/edit.svg";
import { ReactComponent as DeleteIcon } from "assets/svgs/delete.svg";
import * as S from "./Business.styled";
import { setOpenModal, setTypeModal } from "redux/actions/modal/modal.actions";
import { setMainView } from "redux/actions/views/views.actions";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import { down } from "styled-breakpoints";

const Business = () => {
  const dispatch = useDispatch();
  const { business, currentBusiness } = useSelector((state) => state.business);
  const { typeModal, openModal } = useSelector((state) => state.modal);
  const smallDevice = useBreakpoint(down("md"));

  const handleModal = useCallback(
    (type, id) => (e) => {
      e.stopPropagation();
      //dispatch to set action
      id && dispatch(setCurrentId(id));
      dispatch(setTypeModal(type));
      dispatch(setOpenModal(true));
    },
    [dispatch]
  );

  const handleCloseModal = useCallback(() => {
    dispatch(setOpenModal(false));
    dispatch(clearCurrentId());
  }, [dispatch]);

  const handleBusinessGroup = useCallback(
    (view, id) => () => {
      dispatch(setMainView(view));
      dispatch(setCurrentId(id));
    },
    [dispatch]
  );

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteCurrentBusiness(id));
      dispatch(setOpenModal(false));
    },
    [dispatch]
  );

  const contentModal = () => {
    switch (typeModal) {
      case MODAL_TYPES.CREATE:
      case MODAL_TYPES.EDIT:
        return <CreateEdit cancel={handleCloseModal} fullWidth={smallDevice} />;
      case MODAL_TYPES.DELETE:
        return (
          <Delete
            name={currentBusiness.name}
            id={currentBusiness.businessId}
            handleDelete={handleDelete}
            cancel={handleCloseModal}
            fullWidth={smallDevice}
          />
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    dispatch(getBusiness());
  }, [dispatch]);

  return (
    <S.Container>
      <S.Wrapper>
        <Label type={"title"}>Business</Label>
        {!smallDevice && (
          <S.Actions>
            <Button onClick={handleModal(MODAL_TYPES.CREATE)}>
              Create Business
            </Button>
          </S.Actions>
        )}
      </S.Wrapper>
      <S.Content>
        {business.map((item) => (
          <S.BusinessItem
            key={item.businessId}
            onClick={handleBusinessGroup(VIEWS.BUSINNES_TEAM, item.businessId)}
          >
            <Title>{item.name}</Title>
            <S.Icons>
              <EditIcon
                onClick={handleModal(MODAL_TYPES.EDIT, item.businessId)}
              />
              <DeleteIcon
                onClick={handleModal(MODAL_TYPES.DELETE, item.businessId)}
              />
            </S.Icons>
          </S.BusinessItem>
        ))}
      </S.Content>
      {smallDevice && (
        <S.Actions>
          <Button fullWidth={true} onClick={handleModal(MODAL_TYPES.CREATE)}>
            Add Business
          </Button>
        </S.Actions>
      )}
      {openModal && (
        <Modal open={openModal} close={handleCloseModal}>
          {contentModal()}
        </Modal>
      )}
    </S.Container>
  );
};

export default Business;
