import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteModalPortal from './DeleteModalPortal';
import { styled } from 'styled-components';
import TurtleTrashcan from '../../assets/img/img_turtle_trashcan.png';

function DeleteModal({ handleClickYesModalButton, handleClickNoModalButton }) {
  const navigate = useNavigate();

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

  width: 60rem;
  height: 40rem;

  background-color: white;
  border-radius: 1rem;

  padding: 2rem;
`;

const ModalImage = styled.img`
  width: 20rem;
  height: 20rem;

  object-fit: cover;
`;

const ModalWarning = styled.div`
  font-size: 2.5rem;
  font-weight: 550;

  margin-top: 2rem;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  column-gap: 5rem;

  margin-top: 2rem;
`;

const YesModalButton = styled.button`
  width: 10rem;
  height: 5rem;

  font-size: 2.5rem;
  font-weight: 500;

  border: 1px solid black;
  border-radius: 1rem;
`;

const NoModalButton = styled.button`
  width: 10rem;
  height: 5rem;

  font-size: 2.5rem;
  font-weight: 500;

  border: 1px solid black;
  border-radius: 1rem;
`;
