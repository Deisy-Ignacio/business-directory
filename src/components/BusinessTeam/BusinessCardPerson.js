import Title from "components/Common/Title/Title";
import * as S from "./BusinessPerson.styled";
import { Icons } from "../Business/Business.styled";

import { ReactComponent as EditIcon } from "assets/svgs/edit.svg";
import { ReactComponent as DeleteIcon } from "assets/svgs/delete.svg";
import { MODAL_TYPES } from "utils/data";

export default function BusinessCardPerson({
  personId,
  name,
  role,
  phone,
  email,
  handleModal,
}) {
  return (
    <S.ContainerCard>
      <S.Wrapper>
        <div>
          <Title>{name}</Title>
          <Title variant="subtitle">{role}</Title>
        </div>
        <Icons>
          <EditIcon onClick={handleModal(MODAL_TYPES.EDIT, personId)} />
          <DeleteIcon onClick={handleModal(MODAL_TYPES.DELETE, personId)} />
        </Icons>
      </S.Wrapper>
      <div>
        <S.Text>{phone}</S.Text>
        <S.Text>{email}</S.Text>
      </div>
    </S.ContainerCard>
  );
}
