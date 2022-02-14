import * as S from "./Title.styled";

const Title = ({ variant = "primary", children }) => {
  return <S.Title variant={variant}>{children}</S.Title>;
};

export default Title;
