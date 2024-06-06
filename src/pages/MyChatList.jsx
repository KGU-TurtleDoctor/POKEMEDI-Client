import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Common/Header';
import ChatItem from '../components/MyChatList/ChatItem';
import { api } from '../libs/api';
import Loading from './Loading';

function MyChatList() {
  const [myChatList, setMyChatList] = useState();

  useEffect(() => {
    api
      .get('api/chatbot/chathistories', { withCredentials: true })
      .then((res) => {
        if (Array.isArray(res.data.result)) {
          setMyChatList(res.data.result);
        }
      });
  }, []);

  if (!myChatList) {
    return <Loading />;
  }

  return (
    <MyChatListWrapper>
      <Header />
      <MyChatListBodyWrapper>
        <MyChatListBoxWrapper>
          <MyListBox>
            <MyListTitle>나의 채팅 목록</MyListTitle>
          </MyListBox>
          <MyChatListItemContainer>
            {myChatList.map((item) => {
              return <ChatItem key={item.id} {...item} />;
            })}
          </MyChatListItemContainer>
        </MyChatListBoxWrapper>
      </MyChatListBodyWrapper>
    </MyChatListWrapper>
  );
}

export default MyChatList;

const MyChatListWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const MyChatListBodyWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8rem);
  padding: 0 calc((100% - 81.2rem) / 2);
  margin-top: 8rem;

  background-color: #f1f5f9;

  display: flex;
  justify-content: center;
`;

const MyChatListBoxWrapper = styled.div`
  width: 81.2rem;
  min-height: calc(100vh - 8rem);
  padding: 10rem;

  background-color: white;
  font-size: 2rem;
  font-family: Pretendard;

  display: flex;
  flex-direction: column;
`;

const MyChatListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MyListBox = styled.div`
  width: 100%;
  height: 5.2rem;

  display: flex;
  align-items: center;
`;

const MyListTitle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  font-family: Pretendard;
  color: black;

  margin-bottom: 5.5rem;
`;
