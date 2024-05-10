import React from 'react';
import styled from 'styled-components';
import Header from '../components/Common/Header';
import MyInfoSection from '../components/MyPage/MyInfoSection';
import MyPostSection from '../components/MyPage/MyPostSection';

function MyPage() {
  return (
    <MyPageWrapper>
      <Header />
      <MyPageBodyWrapper>
        <MyPageBoxWrapper>
          <MyInfoSection />
          <MyPostSection />
        </MyPageBoxWrapper>
      </MyPageBodyWrapper>
    </MyPageWrapper>
  );
}

export default MyPage;

const MyPageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const MyPageBodyWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8rem);
  padding: 0 calc((100% - 81.2rem) / 2);
  margin-top: 8rem;

  background-color: #f1f5f9;
`;

const MyPageBoxWrapper = styled.div`
  width: 81.2rem;
  min-height: calc(100vh - 8rem);
  height: 100%;
  padding: 5rem 10rem;

  background-color: white;
  font-size: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
