import React from 'react';
import styled from 'styled-components';
import Header from '../components/Common/Header';
import PostContainer from '../components/CommunityDetail/PostContainer';

function CommunityDetail() {
  return (
    <CommunityDetailPageWrapper>
      <Header />
      <CommunityDetailPageBodyWrapper>
        <PostContainer />
      </CommunityDetailPageBodyWrapper>
    </CommunityDetailPageWrapper>
  );
}

export default CommunityDetail;

const CommunityDetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const CommunityDetailPageBodyWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 8rem;
  padding: 0 calc((100% - 81.2rem) / 2);

  background-color: #f1f5f9;
`;
