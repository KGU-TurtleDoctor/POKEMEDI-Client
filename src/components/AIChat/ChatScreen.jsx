import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

function ChatScreen({ chatList }) {
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current.scrollIntoView();
  }, [chatList]);

  return (
    <ChatScreenWrapper>
      <ChatLogDisplay>
        {chatList.map((chat, idx) => (
          <ChatWrapper key={`chat-${idx}`} $chatRole={chat.role}>
            {chat.role === 1 ? (
              <MyChat>{chat.content}</MyChat>
            ) : (
              <DoctorChat>{chat.content}</DoctorChat>
            )}
          </ChatWrapper>
        ))}
        <div ref={messageEndRef}></div>
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
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;

  width: 100%;
  height: calc(100% - 7.5rem);
  padding-top: 2rem;

  background-color: #ffffff;
`;

const ChatLogDisplay = styled.div`
  width: 100%;
  padding: 0 5rem;

  overflow-y: auto;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
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
  justify-content: ${({ $chatRole }) =>
    $chatRole === 0 ? 'flex-start' : 'flex-end'};

  width: 100%;

  animation-name: ${chatup};
  transition: chatup 1s ease;
`;
