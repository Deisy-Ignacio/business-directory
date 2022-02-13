import * as S from "./Label.styled";

export const Label = ({ children, type = "title", ...props }) => {
  return (
    <S.Label type={type} {...props}>
      {children}
    </S.Label>
  );
};
