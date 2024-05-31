import React from 'react';
import DeleteModalPortal from './DeleteModalPortal';
import { styled } from 'styled-components';

function DeleteModal() {
  return (
    <DeleteModalPortal>
      <BlurryContainer></BlurryContainer>
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
  background-color: #000000bf;
`;
