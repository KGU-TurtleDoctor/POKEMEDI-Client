import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getChatHistory } from '../apis/AIChat/getChatHistory';
import { postChatbotPrompt } from '../apis/AIChat/postChatbotPrompt';
import { IcSendBlack } from '../assets/svg/icon';
import ChatScreen from '../components/AIChat/ChatScreen';
import Header from '../components/Common/Header';
import { api } from '../libs/api';
import Loading from './Loading';

function AIChat() {
  const { chatId } = useParams();

  const navigate = useNavigate();

  const [nickname, setNickname] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [chatList, setChatList] = useState();
  const [chat, setChat] = useState('');
  const [chatHistoryId, setChatHistoryId] = useState(chatId ? chatId : -1);

  useEffect(() => {
    api.get('/api/isLogin').then(() => {
      api.get('/api/info', { withCredentials: true }).then((res) => {
        sessionStorage.setItem('name', res.data.result.name);
        setNickname(res.data.result.name);
      });
    });
  }, []);

  useEffect(() => {
    api
      .get('api/community/list', { withCredentials: true })
      .then(() => {
        setIsLogin(true);
      })
      .catch(() => {
        navigate('/login-error');
      });

    setChatHistoryId(chatId ? chatId : -1);
    chatId
      ? getChatHistory(setChatList, chatHistoryId)
      : setChatList([
          {
            role: 0,
            content: '안녕하세요! 포켓메디입니다.\n무엇을 도와드릴까요?',
          },
        ]);
  }, [chatId]);

  const handleChangeChat = (e) => {
    setChat(e.target.value);
  };

  const handleClickSendButton = () => {
    if (chat.length !== 0) {
      setChatList((prevChatList) => [
        ...prevChatList,
        { role: 1, content: chat },
      ]);

      setChat('');

      postChatbotPrompt(chat, setChatList, chatHistoryId, setChatHistoryId);
    }
  };

  const handlePressEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleClickSendButton();
    }
  };

  if (!chatList || !isLogin) {
    return <Loading />;
  }

  return (
    <AIChatPageWrapper>
      <Header nickname={nickname} />
      <AIChatPageBodyWrapper>
        <ChatScreen chatList={chatList} />
      </AIChatPageBodyWrapper>
      <ChattingInputContainer>
        <ChattingInputWrapper>
          <ChattingInput
            placeholder="메시지를 입력해주세요."
            value={chat}
            onChange={handleChangeChat}
            onKeyDown={handlePressEnterKey}
          />
          <MessageSendButton onClick={handleClickSendButton}>
            <IcSendBlack />
          </MessageSendButton>
        </ChattingInputWrapper>
      </ChattingInputContainer>
    </AIChatPageWrapper>
  );
}

export default AIChat;

const AIChatPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  width: 100vw;
`;

const AIChatPageBodyWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 8rem);
  padding: 0 calc((100% - 81.2rem) / 2);
  margin-top: 8rem;

  background-color: #f1f5f9;
`;

const ChattingInputContainer = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3.75rem;

  width: 81.2rem;
  height: 7rem;
  background-color: #04293f;
`;

const ChattingInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  height: 5rem;
  padding: 0 1rem 0 2rem;

  border-radius: 0.8rem;

  background-color: #ffffff;
`;

const ChattingInput = styled.input`
  width: 90%;
  height: 100%;

  font-size: 1.8rem;
  font-weight: 500;
  font-family: Pretendard;
  line-height: 2rem;

  border: none;
`;

const MessageSendButton = styled.button`
  width: 4rem;
  height: 4rem;
  padding-top: 0.3rem;
`;
