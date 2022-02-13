import * as S from "./Button.styled";

export const Button = ({
  children,
  variant = "primary",
  fullWidth,
  ...props
}) => {
  return (
    <S.Button variant={variant} fullWidth={fullWidth} {...props}>
      {children}
    </S.Button>
  );
};
