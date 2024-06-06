import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Common/Header';
import MyChatSection from '../components/MyPage/MyChatSection';
import MyInfoSection from '../components/MyPage/MyInfoSection';
import MyPostSection from '../components/MyPage/MyPostSection';
import { api } from '../libs/api';
import Loading from './Loading';

function MyPage() {
  const [myPost, setMyPost] = useState();
  const [myChat, setMyChat] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/api/community/myPostList`, {
        withCredentials: true,
      })
      .then((res) => {
        if (Array.isArray(res.data.result)) {
          setMyPost(res.data.result);
        }
      })
      .catch(() => {
        navigate('/login-error');
      });

    api
      .get(`api/chatbot/chathistories`, {
        withCredentials: true,
      })
      .then((res) => {
        if (Array.isArray(res.data.result)) {
          setMyChat(res.data.result);
        }
      });
  }, []);

  if (!myPost || !myChat) {
    return <Loading />;
  }

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
  font-family: Pretendard;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
