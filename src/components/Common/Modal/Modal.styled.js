import { down } from "styled-breakpoints";
import styled from "styled-components";

export const ModalBolck = styled.div`
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`;

export const ModalOverlay = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.9;
  cursor: default;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.5rem 4rem 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 100%;
  max-width: 45.2rem;
  max-height: 75vh;
  animation: 0.2s ease 1;
  z-index: 1;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 29px;
  ${down("md")} {
    max-height: max-content;
    min-width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;

export const ModalTitle = styled.div``;

export const ModalBody = styled.div``;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.workSans};
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.1rem;
`;

export const ModalFooter = styled.div``;

export const ModalWrapper = styled.div`
  position: relative;
  height: 100%;
`;
