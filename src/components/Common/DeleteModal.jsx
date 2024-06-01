import React from 'react';
import { styled } from 'styled-components';
import TurtleTrashcan from '../../assets/img/img_turtle_trashcan.png';
import DeleteModalPortal from './DeleteModalPortal';

function DeleteModal({ handleClickYesModalButton, handleClickNoModalButton }) {
  return (
    <DeleteModalPortal>
      <BlurryContainer>
        <ModalWrapper>
          <ModalImage src={TurtleTrashcan} />
          <ModalWarning>정말 삭제하시겠습니까?</ModalWarning>
          <ModalButtonWrapper>
            <YesModalButton onClick={handleClickYesModalButton}>
              예
            </YesModalButton>
            <NoModalButton onClick={handleClickNoModalButton}>
              아니오
            </NoModalButton>
          </ModalButtonWrapper>
        </ModalWrapper>
      </BlurryContainer>
    </DeleteModalPortal>
  );
}

export default DeleteModal;

const BlurryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 3;

  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2.5rem;

  width: 40rem;
  height: 35rem;

  background-color: white;
  border-radius: 1rem;

  padding: 2rem;
`;

const ModalImage = styled.img`
  width: 15rem;
  height: 15rem;

  object-fit: cover;
`;

const ModalWarning = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  column-gap: 5rem;
`;

const YesModalButton = styled.button`
  width: 8.5rem;
  height: 4rem;

  font-size: 1.75rem;
  font-weight: 500;

  border-radius: 0.7rem;

  background-color: #04293f;
  color: white;
`;

const NoModalButton = styled.button`
  width: 8.5rem;
  height: 4rem;

  font-size: 1.75rem;
  font-weight: 500;

  background-color: #ff0000;
  color: white;

  border-radius: 0.7rem;

  transition: 0.3s ease;

  &:hover {
    background-color: #b81414;
  }
`;
