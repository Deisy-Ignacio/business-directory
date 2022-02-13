import styled from "styled-components";

export const Container = styled.div`
  min-width: 25rem;
  height: 100vh;
  padding: 7.8rem 1.6rem 3.5rem 4rem;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const UserName = styled.div`
  width: 4rem;
  height: 4rem;
  background: ${({ theme }) => theme.colors.blackSecond};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 100%;

  font-family: ${({ theme }) => theme.fonts.workSans};
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.6rem;
  text-align: center;
  vertical-align: middle;
  line-height: 4rem;
`;

export const MenuList = styled.div`
  margin-top: 8rem;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 3.4rem;
  }
`;

export const MenuName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.workSans};
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2rem;

  color: ${({ theme }) => theme.colors.gray};
  margin-left: 3rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 3.5rem;
`;

export const Item = styled.h1`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 2.5rem;
  }
`;
