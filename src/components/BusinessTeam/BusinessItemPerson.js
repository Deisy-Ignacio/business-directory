import Title from "components/Common/Title/Title";
import { ReactComponent as EditIcon } from "assets/svgs/edit.svg";
import { ReactComponent as DeleteIcon } from "assets/svgs/delete.svg";
import { MODAL_TYPES } from "utils/data";
import * as S from "./BusinessPerson.styled";
import { Icons } from "../Business/Business.styled";

export default function BusinessItemPerson({
  personId,
  name,
  role,
  handleModal,
}) {
  return (
    <S.BusinessItemPerson key={personId}>
      <Title>{name}</Title>
      <Title variant="secondary">{role}</Title>
      <Icons>
        <EditIcon onClick={handleModal(MODAL_TYPES.EDIT, personId)} />
        <DeleteIcon onClick={handleModal(MODAL_TYPES.DELETE, personId)} />
      </Icons>
    </S.BusinessItemPerson>
  );
}
