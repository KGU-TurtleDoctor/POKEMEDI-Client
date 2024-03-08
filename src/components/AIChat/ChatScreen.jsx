import React from 'react';
import styled from 'styled-components';

function ChatScreen() {
  return (
    <ChatScreenWrapper>
      <MyChat>dkssud</MyChat>
    </ChatScreenWrapper>
  );
}

export default ChatScreen;

const ChatScreenWrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: #ffffff;
`;

const MyChat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3rem;
  width: 20rem;

  background-color: red;
`;

const ChatBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3rem;
  width: 20rem;

  background-color: red;
`;
