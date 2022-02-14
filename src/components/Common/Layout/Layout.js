import React from "react";
import SideBar from "../SideBar/SideBar";
import * as S from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <S.LayoutContainer>
      <SideBar />
      <S.Content>{children}</S.Content>
    </S.LayoutContainer>
  );
};

export default Layout;
