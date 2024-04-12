import React from 'react';
import styled, { keyframes } from 'styled-components';

function ChatScreen({ chatList }) {
  return (
    <ChatScreenWrapper>
      <ChatLogDisplay>
        {chatList.map((chat) => (
          <ChatWrapper chatId={chat.id}>
            {chat.id === 1 ? (
              <MyChat>{chat.text}</MyChat>
            ) : (
              <DoctorChat>{chat.text}</DoctorChat>
            )}
          </ChatWrapper>
        ))}
      </ChatLogDisplay>
    </ChatScreenWrapper>
  );
}

export default ChatScreen;

const chatup = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const ChatScreenWrapper = styled.div`
  width: 100%;
  height: calc(100% - 7.5rem);

  position: relative;

  background-color: #ffffff;
  /* 
  overflow: scroll; */
`;

const ChatLogDisplay = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  padding: 0 5rem;
`;

const MyChat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30rem;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;

  border-radius: 1.2rem 1.2rem 0 1.2rem;

  background-color: #f1f5f9;

  font-size: 1.7rem;
  font-weight: 500;

  word-break: break-all;
  white-space: pre-wrap;

  line-height: 130%;
`;

const DoctorChat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30rem;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;

  border-radius: 1.2rem 1.2rem 1.2rem 0;

  background-color: #dde5ee;

  font-size: 1.7rem;
  font-weight: 500;

  word-break: break-all;
  white-space: pre-wrap;

  line-height: 130%;
`;

const ChatWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: ${(props) =>
    props.chatId === 2 ? 'flex-start' : 'flex-end'};

  width: 100%;

  animation-name: ${chatup};
  transition: chatup 1s ease;
`;
