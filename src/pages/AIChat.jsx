import React from 'react';
import styled from 'styled-components';
import { IcSend } from '../assets/svg/icon';
import ChatScreen from '../components/AIChat/ChatScreen';
import Header from '../components/Common/Header';

function AIChat() {
  return (
    <AIChatPageWrapper>
      <Header />
      <AIChatPageBodyWrapper>
        <ChatScreen />
      </AIChatPageBodyWrapper>
      <ChattingInputBox>
        <ChattingInput />
        <button>
          <IcSend />
        </button>
      </ChattingInputBox>
    </AIChatPageWrapper>
  );
}

export default AIChat;

const AIChatPageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const AIChatPageBodyWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 8rem);
  padding: 0 37.5rem;

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
