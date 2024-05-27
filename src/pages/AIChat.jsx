import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getChatHistory } from '../apis/AIChat/getChatHistory';
import { postChatbotPrompt } from '../apis/AIChat/postChatbotPrompt';
import { IcSendBlack } from '../assets/svg/icon';
import ChatScreen from '../components/AIChat/ChatScreen';
import Header from '../components/Common/Header';

function AIChat() {
  const { chatId } = useParams();

  const [chatList, setChatList] = useState([]);
  const [chat, setChat] = useState('');
  const [chatHistoryId, setChatHistoryId] = useState(chatId ? chatId : -1);

  useEffect(() => {
    setChatHistoryId(chatId ? chatId : -1);
    chatId
      ? getChatHistory(setChatList, chatHistoryId)
      : setChatList([
          {
            role: 0,
            content:
              '안녕하세요! 포켓메디입니다.\n무엇을 도와드릴까요?\n\n하단 카테고리를 보고 선택해주세요!',
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

  return (
    <AIChatPageWrapper>
      <Header />
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
  line-height: 2rem;

  border: none;
`;

const MessageSendButton = styled.button`
  width: 4rem;
  height: 4rem;
  padding-top: 0.3rem;
`;
