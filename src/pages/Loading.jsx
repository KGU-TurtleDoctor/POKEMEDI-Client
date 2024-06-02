import React from 'react';
import styled from 'styled-components';
import svgLoading from '../assets/gif/loading.gif';
import Header from '../components/Common/Header';

function Loading() {
  return (
    <LoadingListWrapper>
      <Header />
      <LoadingBodyWrapper>
        <LoadingBoxWrapper>
          <LoadingSVG src={svgLoading} alt="로딩중" />
        </LoadingBoxWrapper>
      </LoadingBodyWrapper>
    </LoadingListWrapper>
  );
}

export default Loading;

const LoadingListWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const LoadingBodyWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8rem);
  padding: 0 calc((100% - 81.2rem) / 2);
  margin-top: 8rem;

  background-color: #f1f5f9;

  display: flex;
  justify-content: center;
`;

const LoadingBoxWrapper = styled.div`
  width: 81.2rem;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingSVG = styled.img`
  width: 15%;
`;
