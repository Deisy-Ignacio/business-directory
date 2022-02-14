import * as S from "./Button.styled";

const Button = ({ children, variant = "primary", fullWidth, ...props }) => {
  return (
    <S.Button variant={variant} fullWidth={fullWidth} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
