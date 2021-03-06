import { down } from "styled-breakpoints";
import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 15rem 4.5rem 0 3.5rem;
  ${down("md")} {
    padding: 4.8rem 2.4rem 3.9rem;
  }
`;

export const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  & svg {
    margin-right: 2.7rem;
    cursor: pointer;
    path {
      stroke: #000;
    }
  }
`;

export const Icons = styled.div`
  text-align: end;
  & svg {
    cursor: pointer;
  }
  & > :first-child {
    margin-right: 2.5rem;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 2.6rem;

  ${({ overview }) =>
    overview &&
    css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    `}
`;

export const BusinessItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.6rem 0;
  border-bottom: 1px solid #efeeee;
  cursor: pointer;
`;

export const IconView = styled.div`
  cursor: pointer;
`;
