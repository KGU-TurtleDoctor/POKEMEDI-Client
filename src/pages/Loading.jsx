import React from 'react';
import svgLoading from '../assets/gif/loading.gif';
import styled from 'styled-components';

function Loading() {
  return (
    <LoadingsvgWrapper>
      <img src={svgLoading} alt="로딩중" width="11%" />
    </LoadingsvgWrapper>
  );
}

export default Loading;

const LoadingsvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;
