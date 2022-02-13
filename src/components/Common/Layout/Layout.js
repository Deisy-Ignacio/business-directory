import React from "react";
import { SideBar } from "../SideBar/SideBar";
import * as S from "./Layout.styled";

export const Layout = ({ children }) => {
  return (
    <S.LayoutContainer>
      <SideBar />
      <S.Content>{children}</S.Content>
    </S.LayoutContainer>
  );
};
