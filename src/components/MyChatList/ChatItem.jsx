import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ChatItem({ chatHistoryId, title, name, date }) {
  const navigate = useNavigate();

  const handleClickPostItem = () => {
    navigate(`/community/aichat/${chatHistoryId}`);
  };

  return (
    <PostWrapper onClick={handleClickPostItem}>
      <PostTitle>{title}</PostTitle>
      <PostInfo>
        <PostNickname>{name}</PostNickname>
        <PostDate>{date}</PostDate>
      </PostInfo>
    </PostWrapper>
  );
}

export default ChatItem;

const PostWrapper = styled.div`
  width: 100%;
  padding: 3.2rem 3.2rem;

  background-color: rgb(245, 245, 247);

  border-radius: 1rem;
  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

const PostTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const PostInfo = styled.div`
  column-gap: 1.5rem;
  margin-top: 2rem;

  display: flex;
`;

const PostNickname = styled.div`
  font-size: 1.5rem;
  color: #777;
`;

const PostDate = styled.div`
  font-size: 1.5rem;
  color: #777;
`;
