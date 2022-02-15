import { down } from "styled-breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  display: none;
  ${down("md")} {
    display: inline-block;
    width: 100%;
    padding: 1.5rem;
  }
`;
