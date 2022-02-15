import styled from "styled-components";

const VARIANTS = {
  primary: { background: "#000", color: "#fff" },
  secondary: { background: "#F8F8F8", color: "#000" },
  error: { background: "#FFD5D5", color: "#9A0000" },
};

export const Button = styled.button`
  ${({ fullWidth }) => (fullWidth ? "width:100%;" : "")}
  background: ${({ variant }) => VARIANTS[variant].background};
  color: ${({ variant }) => VARIANTS[variant].color};
  opacity: ${({ disabled }) => disabled && "0.7"};

  height: 4.8rem;
  border-radius: 10rem;
  padding: 0 2.4rem;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2rem;

  border: none;

  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;
