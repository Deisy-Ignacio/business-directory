import Button from "components/Common/Button/Button";
import Label from "components/Common/Label/Label";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCurrentBusinessPerson,
  deleteCurrentBusinessPerson,
  getBusinessTeam,
  resetStateBusinessPerson,
  setCurrentBusinessPerson,
} from "../../redux/actions/businessPerson.actions";
import * as S from "../Business/Business.styled";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import { down } from "styled-breakpoints";
import { ReactComponent as OverviewIcon } from "assets/svgs/overview.svg";
import { ReactComponent as ListIcon } from "assets/svgs/list.svg";
import { ReactComponent as ArrowIcon } from "assets/svgs/arrow-left.svg";

import Modal from "components/Common/Modal/Modal";
import { MODAL_TYPES, VIEWS } from "utils/data";
import { CreateEditTeam } from "components/BusinessTeamForm/CreateEditTeam";
import Delete from "components/BusinessForm/Delete";
import { setOpenModal, setTypeModal } from "redux/actions/modal/modal.actions";
import { setMainView, setOverview } from "redux/actions/views/views.actions";
import BusinessItemPerson from "./BusinessItemPerson";
import BusinessCardPerson from "./BusinessCardPerson";
import { useTranslation } from "react-i18next";

export default function BusinessTeam() {
  const smallDevice = useBreakpoint(down("md"));
  const dispatch = useDispatch();
  const { currentBusiness } = useSelector((state) => state.business);
  const { businessTeam, currentBusinessPerson } = useSelector(
    (state) => state.businessPerson
  );
  const { t } = useTranslation("translation", { keyPrefix: "businessPerson" });

  const { typeModal, openModal } = useSelector((state) => state.modal);
  const { overview } = useSelector((state) => state.views);
  const ICON_VIEW = overview ? <ListIcon /> : <OverviewIcon />;

  /**
   * This is a closure to define typeModal, currentBusiness and open the modal
   *
   * @param {string} type define type modal
   * @param {string} id set current business person by id
   * @returns {Function}
   */
  const handleModal = useCallback(
    (type, id) => () => {
      id && dispatch(setCurrentBusinessPerson(id));
      dispatch(setTypeModal(type));
      dispatch(setOpenModal(true));
    },
    [dispatch]
  );

  /**
   * This is a function to close the modal and clear the currentBusinessPerson
   *
   * @returns {void}
   */
  const handleCloseModal = useCallback(() => {
    dispatch(setOpenModal(false));
    dispatch(clearCurrentBusinessPerson());
  }, [dispatch]);

  /**
   * This is a function to delete currentBusinessPerson and close the modal.
   *
   * @param {string} id set current business person by id
   * @returns {void}
   */
  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteCurrentBusinessPerson(currentBusiness.businessId, id));
      dispatch(setOpenModal(false));
    },
    [dispatch, currentBusiness]
  );

  /**
   * This is a function to get the modal content.
   *
   * @returns {React.Element | null}
   */
  const contentModal = () => {
    switch (typeModal) {
      case MODAL_TYPES.CREATE:
      case MODAL_TYPES.EDIT:
        return (
          <CreateEditTeam
            businessId={currentBusiness.businessId}
            cancel={handleCloseModal}
            fullWidth={smallDevice}
          />
        );
      case MODAL_TYPES.DELETE:
        return (
          <Delete
            name={currentBusinessPerson.name}
            id={currentBusinessPerson.personId}
            handleDelete={handleDelete}
            cancel={handleCloseModal}
            fullWidth={smallDevice}
          />
        );

      default:
        return null;
    }
  };

  /**
   * This is a function to set the overview
   * @returns {void}
   */
  const onChangeView = () => {
    dispatch(setOverview(!overview));
  };

  /**
   * This is a function to set the main view and reset the business Person
   * @returns {void}
   */
  const onChangeMainView = (view) => () => {
    dispatch(setMainView(view));
    dispatch(resetStateBusinessPerson());
  };

  useEffect(() => {
    dispatch(getBusinessTeam(currentBusiness.businessId));
  }, [dispatch, currentBusiness]);

  return (
    <S.Container>
      <S.IconView onClick={onChangeMainView(VIEWS.BUSINNES)}>
        <ArrowIcon />
      </S.IconView>
      <S.Wrapper>
        <Label type={"title"}>{t("title")}</Label>
        <S.Actions>
          <S.IconView onClick={onChangeView}>{ICON_VIEW}</S.IconView>
          {!smallDevice && (
            <Button onClick={handleModal(MODAL_TYPES.CREATE)}>
              {t("create")}
            </Button>
          )}
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
      {smallDevice && (
        <Button fullWidth={true} onClick={handleModal(MODAL_TYPES.CREATE)}>
          {t("createMobile")}
        </Button>
      )}
      {openModal && (
        <Modal open={openModal} close={handleCloseModal}>
          {contentModal()}
        </Modal>
      )}
    </S.Container>
  );
}
