import Button from "components/Common/Button/Button";
import Label from "components/Common/Label/Label";
import Title from "components/Common/Title/Title";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCurrentBusinessPerson,
  deleteCurrentBusinessPerson,
  getBusinessTeam,
  setCurrentBusinessPerson,
} from "../../redux/actions/businessPerson.actions";
import * as S from "./Business.styled";

import { ReactComponent as OverviewIcon } from "assets/svgs/overview.svg";
import { ReactComponent as EditIcon } from "assets/svgs/edit.svg";
import { ReactComponent as DeleteIcon } from "assets/svgs/delete.svg";
import Modal from "components/Common/Modal/Modal";
import { MODAL_TYPES } from "utils/data";
import { CreateEditTeam } from "components/BusinessTeamForm/CreateEditTeam";
import Delete from "components/BusinessForm/Delete";
import { setOpenModal, setTypeModal } from "redux/actions/Modal/modal.actions";

export default function BusinessTeam() {
  const dispatch = useDispatch();
  const { currentBusiness } = useSelector((state) => state.business);
  const { businessTeam, currentBusinessPerson } = useSelector(
    (state) => state.businessPerson
  );
  const { typeModal, openModal } = useSelector((state) => state.modal);

  const handleModal = useCallback(
    (type, id) => () => {
      id && dispatch(setCurrentBusinessPerson(id));
      dispatch(setTypeModal(type));
      dispatch(setOpenModal(true));
    },
    [dispatch]
  );

  const handleCloseModal = useCallback(() => {
    dispatch(setOpenModal(false));
    dispatch(clearCurrentBusinessPerson());
  }, [dispatch]);

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteCurrentBusinessPerson(currentBusiness.businessId, id));
      dispatch(setOpenModal(false));
    },
    [dispatch, currentBusiness]
  );

  const contentModal = () => {
    switch (typeModal) {
      case MODAL_TYPES.CREATE:
      case MODAL_TYPES.EDIT:
        return (
          <CreateEditTeam
            businessId={currentBusiness.businessId}
            cancel={handleCloseModal}
          />
        );
      case MODAL_TYPES.DELETE:
        return (
          <Delete
            name={currentBusinessPerson.name}
            id={currentBusinessPerson.personId}
            handleDelete={handleDelete}
            cancel={handleCloseModal}
          />
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    dispatch(getBusinessTeam(currentBusiness.businessId));
  }, [dispatch, currentBusiness]);

  return (
    <S.Container>
      <S.Wrapper>
        <Label type={"title"}>Business Name</Label>
        <S.Actions>
          <OverviewIcon />
          <Button size={"medium"} onClick={handleModal(MODAL_TYPES.CREATE)}>
            Create Person
          </Button>
        </S.Actions>
      </S.Wrapper>
      <S.Content>
        {businessTeam.map((item) => (
          <S.BusinessItemPerson key={item.personId}>
            <Title>{item.name}</Title>
            <Title variant="secondary">{item.role}</Title>
            <S.Icons>
              <EditIcon
                onClick={handleModal(MODAL_TYPES.EDIT, item.personId)}
              />
              <DeleteIcon
                onClick={handleModal(MODAL_TYPES.DELETE, item.personId)}
              />
            </S.Icons>
          </S.BusinessItemPerson>
        ))}
      </S.Content>
      {openModal && (
        <Modal open={openModal} close={handleCloseModal}>
          {contentModal()}
        </Modal>
      )}
    </S.Container>
  );
}
