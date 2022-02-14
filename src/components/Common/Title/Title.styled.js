import styled from "styled-components";

const VARIANT = {
  primary: { fontWeight: "600" },
  secondary: { fontWeight: "normal" },
};

export const Title = styled.h1`
  font-weight: ${({ variant }) => VARIANT[variant].fontWeight};
  font-size: 1.6rem;
  line-height: 2.2rem;
  text-transform: capitalize;

  margin: 0;
`;
