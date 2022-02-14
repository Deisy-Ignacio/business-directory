import styled from "styled-components";

const VARIANT = {
  primary: { fontSize: "1.6rem", fontWeight: "600", color: "#1A1A1A" },
  secondary: { fontSize: "1.6rem", fontWeight: "normal", color: "#1A1A1A" },
  subtitle: { fontSize: "1.4rem", lineHeight: "2rem", color: "#8D929A" },
};

export const Title = styled.h1`
  font-weight: ${({ variant }) => VARIANT[variant].fontWeight};
  font-size: ${({ variant }) => VARIANT[variant].fontSize};
  color: ${({ variant }) => VARIANT[variant].color};
  line-height: 2.2rem;
  text-transform: capitalize;

  margin: 0;
`;
