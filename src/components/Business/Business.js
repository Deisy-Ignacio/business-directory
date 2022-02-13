import { useCallback, useEffect, useState } from "react";
import { Label } from "components/Common/Label/Label";
import { Button } from "components/Common/Button/Button";
import { Title } from "components/Common/Title/Title";
import * as S from "./Business.styled";
import { ReactComponent as Overview } from "assets/svgs/overview.svg";
import { ReactComponent as EditIcon } from "assets/svgs/edit.svg";
import { ReactComponent as DeleteIcon } from "assets/svgs/delete.svg";
import { Modal } from "components/Common/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCurrentId,
  getBusiness,
  setCurrentId,
  setTypeModal,
} from "../../redux/actions/business.actions";
import { Create } from "components/BusinessForm/Create";
import Delete from "components/BusinessForm/Delete";

const MODAL_TYPES = { CREATE: "CREATE", EDIT: "EDIT", DELETE: "DELETE" };

const Business = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { business, typeModal } = useSelector((state) => state.business);

  const handleModal = useCallback(
    (type, id) => () => {
      //dispatch to set action
      id && dispatch(setCurrentId(id));
      dispatch(setTypeModal(type));
      setOpen(true);
    },
    [dispatch]
  );

  const handleCloseModal = useCallback(() => {
    setOpen(false);
    dispatch(clearCurrentId());
  }, [dispatch]);

  const contentModal = () => {
    switch (typeModal) {
      case MODAL_TYPES.CREATE:
      case MODAL_TYPES.EDIT:
        return <Create cancel={handleCloseModal} />;
      case MODAL_TYPES.DELETE:
        return <Delete cancel={handleCloseModal} />;

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
        <Label type={"title"}>Business Name</Label>
        <S.Actions>
          <Button size={"medium"} onClick={handleModal(MODAL_TYPES.CREATE)}>
            Create Business
          </Button>
        </S.Actions>
      </S.Wrapper>
      <S.Content>
        {business.map((item) => (
          <S.BusinessItem key={item.businessId}>
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
      {open && (
        <Modal open={open} close={handleCloseModal}>
          {contentModal()}
        </Modal>
      )}
    </S.Container>
  );
};

export default Business;
