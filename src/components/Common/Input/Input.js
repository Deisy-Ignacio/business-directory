import { Label } from "../Label/Label";
import * as S from "./Input.styled";

export const Input = ({ title, ...props }) => {
  return (
    <S.Container>
      <Label type="inputLabel">{title}</Label>
      <S.Input {...props} />
    </S.Container>
  );
};
