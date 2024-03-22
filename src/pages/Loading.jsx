import React from 'react';
import styled from 'styled-components';

function Loading() {
  return <LoadingWrapper>Loading</LoadingWrapper>;
}

export default Loading;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  font-size: 3rem;
`;
