import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Actions = styled.div``;

export const Icons = styled.div`
  & svg {
    cursor: pointer;
  }
  & > :first-child {
    margin-right: 2.5rem;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  margin: 1.6rem 0;
`;

export const BusinessItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.6rem 0;
  border-bottom: 1px solid #efeeee; ;
`;
