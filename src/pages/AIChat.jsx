import React, { useState } from 'react';
import styled from 'styled-components';
import { postChatbotPrompt } from '../apis/AIChat/postChatbotPrompt';
import { IcSend } from '../assets/svg/icon';
import ChatScreen from '../components/AIChat/ChatScreen';
import Header from '../components/Common/Header';

function AIChat() {
  const [chatList, setChatList] = useState([
    {
      id: 2,
      text: '안녕하세요! 포켓메디입니다.\n무엇을 도와드릴까요?\n\n하단 카테고리를 보고 선택해주세요!',
    },
  ]);
  const [chat, setChat] = useState();

  const handleChangeChat = (e) => {
    setChat(e.target.value);
  };

  const handleClickSendButton = () => {
    setChatList([...chatList, { id: 1, text: chat }]);

    postChatbotPrompt(chat, (data) => {
      setChatList([...chatList, { id: 1, text: chat }, { id: 2, text: data }]);
      setChat('');
    });
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
      <ChattingInputBox>
        <ChattingInput
          value={chat}
          onChange={handleChangeChat}
          onKeyDown={handlePressEnterKey}
        />
        <button onClick={handleClickSendButton}>
          <IcSend />
        </button>
      </ChattingInputBox>
    </AIChatPageWrapper>
  );
}

export default AIChat;

const AIChatPageWrapper = styled.div`
  position: relative;
  width: 100vw;
`;

const AIChatPageBodyWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 8rem);
  padding: 0 calc((100% - 76.2rem) / 2);
  margin-top: 8rem;

  background-color: #f1f5f9;
`;

const ChattingInputBox = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3.75rem;

  width: 100%;
  height: 7.5rem;
  background-color: #04293f;
`;

const ChattingInput = styled.input`
  width: 65%;
  height: 4.75rem;
  padding: 0 1.5rem;

  font-size: 1.875rem;
  font-weight: 500;

  border: 0.1rem solid rgb(211, 211, 211);
  border-radius: 1rem;
`;
