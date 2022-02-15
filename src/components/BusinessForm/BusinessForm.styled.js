import { down } from "styled-breakpoints";
import styled from "styled-components";

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.2rem;

  & > :first-child {
    margin-right: 1.6rem;
  }

  ${down("md")} {
    flex-direction: column;
    position: absolute;
    bottom: 0px;
    width: 100%;
    & > :first-child {
      margin-right: 0;
      margin-bottom: 1.6rem;
    }
  }
`;
