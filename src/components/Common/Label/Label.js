import * as S from "./Label.styled";

const Label = ({ children, type = "title", ...props }) => {
  return (
    <S.Label type={type} {...props}>
      {children}
    </S.Label>
  );
};

export default Label;
