import * as S from "./Modal.styled";

const Modal = ({ open, close, title, children }) => {
  return (
    <>
      {open && (
        <S.ModalBolck>
          <S.ModalOverlay onClick={() => close()} />
          <S.ModalContainer>
            <S.ModalWrapper>
              <S.ModalTitle>{title}</S.ModalTitle>
              <S.ModalBody>{children}</S.ModalBody>
            </S.ModalWrapper>
            <S.ModalFooter></S.ModalFooter>
          </S.ModalContainer>
        </S.ModalBolck>
      )}
    </>
  );
};

export default Modal;
