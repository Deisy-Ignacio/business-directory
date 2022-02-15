import styled from "styled-components";
const TYPES = {
  subtitle: { fontSize: "1.8rem", lineHeight: "2.1rem" },
  inputLabel: {
    fontFamily: "Public Sans",
    fontSize: "1.4rem",
    fontWeight: "600",
    lineHeight: "2rem",
    color: "#6B6E74;",
  },
  title: { fontSize: "3rem", lineHeight: "4rem" },
};

export const Label = styled.h1`
  font-family: ${({ theme, type }) =>
    type === "inputLabel" ? TYPES[type].fontFamily : theme.fonts.workSans};
  font-weight: ${({ type }) => TYPES[type].fontWeight | "bold"};
  font-size: ${({ type }) => TYPES[type].fontSize};
  line-height: ${({ type }) => TYPES[type].lineHeight};
  color: ${({ type }) => TYPES[type].color};

  text-align: ${({ textAlign }) => textAlign};

  margin: 0;
`;
