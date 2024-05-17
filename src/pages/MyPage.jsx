import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Common/Header';
import MyChatSection from '../components/MyPage/MyChatSection';
import MyInfoSection from '../components/MyPage/MyInfoSection';
import MyPostSection from '../components/MyPage/MyPostSection';
import { api } from '../libs/api';

function MyPage() {
  const [myPost, setMyPost] = useState({
    id: -1,
    title: '',
    content: '',
    nickname: '',
    date: '',
  });
  const [myChat, setMyChat] = useState({
    chatHistoryId: -1,
    name: '',
    date: '',
    title: '',
  });

  useEffect(() => {
    api
      .get(`/api/community/myPost`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyPost(res.data.result);
      });

    api
      .get(`api/chatbot/chathistory`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyChat(res.data.result);
      });
  }, []);

  return (
    <MyPageWrapper>
      <Header />
      <MyPageBodyWrapper>
        <MyPageBoxWrapper>
          <MyInfoSection />
          <MyPostSection myPost={myPost} />
          <MyChatSection myChat={myChat} />
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
