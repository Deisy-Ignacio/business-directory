import Button from "components/Common/Button/Button";
import Label from "components/Common/Label/Label";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCurrentBusinessPerson,
  deleteCurrentBusinessPerson,
  getBusinessTeam,
  setCurrentBusinessPerson,
} from "../../redux/actions/businessPerson.actions";
import * as S from "../Business/Business.styled";
import { ReactComponent as OverviewIcon } from "assets/svgs/overview.svg";
import { ReactComponent as ListIcon } from "assets/svgs/list.svg";
import Modal from "components/Common/Modal/Modal";
import { MODAL_TYPES } from "utils/data";
import { CreateEditTeam } from "components/BusinessTeamForm/CreateEditTeam";
import Delete from "components/BusinessForm/Delete";
import { setOpenModal, setTypeModal } from "redux/actions/modal/modal.actions";
import { setOverview } from "redux/actions/views/views.actions";
import BusinessItemPerson from "./BusinessItemPerson";
import BusinessCardPerson from "./BusinessCardPerson";

export default function BusinessTeam() {
  const dispatch = useDispatch();
  const { currentBusiness } = useSelector((state) => state.business);
  const { businessTeam, currentBusinessPerson } = useSelector(
    (state) => state.businessPerson
  );
  const { typeModal, openModal } = useSelector((state) => state.modal);
  const { overview } = useSelector((state) => state.views);
  const ICON_VIEW = overview ? <ListIcon /> : <OverviewIcon />;

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

  const onChangeView = () => {
    dispatch(setOverview(!overview));
  };

  useEffect(() => {
    dispatch(getBusinessTeam(currentBusiness.businessId));
  }, [dispatch, currentBusiness]);

  return (
    <S.Container>
      <S.Wrapper>
        <Label type={"title"}>Business Name</Label>
        <S.Actions>
          <S.IconView onClick={onChangeView}>{ICON_VIEW}</S.IconView>
          <Button size={"medium"} onClick={handleModal(MODAL_TYPES.CREATE)}>
            Create Person
          </Button>
        </S.Actions>
      </S.Wrapper>
      <S.Content overview={overview}>
        {businessTeam.map((item) =>
          overview ? (
            <BusinessCardPerson
              key={`business-person_${item.personId}`}
              personId={item.personId}
              name={item.name}
              role={item.role}
              email={item.email}
              phone={item.phone}
              handleModal={handleModal}
            />
          ) : (
            <BusinessItemPerson
              key={`business-person_${item.personId}`}
              personId={item.personId}
              name={item.name}
              role={item.role}
              handleModal={handleModal}
            />
          )
        )}
      </S.Content>
      {openModal && (
        <Modal open={openModal} close={handleCloseModal}>
          {contentModal()}
        </Modal>
      )}
    </S.Container>
  );
}
