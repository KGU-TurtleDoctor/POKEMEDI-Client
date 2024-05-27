import React from 'react';
import svgLoading from '../assets/gif/loading.gif';
import Header from '../components/Common/Header';
import styled from 'styled-components';

function Loading() {
  return (
    <LoadingListWrapper>
      <Header />
      <LoadingBodyWrapper>
        <LoadingBoxWrapper>
          <LoadingSVGWrapper>
            <LoadingSVG src={svgLoading} alt="로딩중" />
          </LoadingSVGWrapper>
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
  min-height: calc(100vh - 8rem);
  padding: 10rem;

  background-color: white;
  font-size: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const LoadingSVGWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const LoadingSVG = styled.img`
  width: 25%;
`;
