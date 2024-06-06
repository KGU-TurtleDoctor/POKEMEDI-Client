import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function PostItem({ id, title, content, nickname, date }) {
  const navigate = useNavigate();

  const handleClickPostItem = () => {
    navigate(`/community/post/${id}`);
  };

  return (
    <PostWrapper onClick={handleClickPostItem}>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
      <PostInfo>
        <PostNickname>{nickname}</PostNickname>
        <PostDate>{date}</PostDate>
      </PostInfo>
    </PostWrapper>
  );
}

export default PostItem;

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
  font-family: Pretendard;
  color: #333;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const PostContent = styled.div`
  font-size: 1.6rem;
  font-family: Pretendard;
  margin-top: 2rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;

  line-height: 140%;
`;

const PostInfo = styled.div`
  column-gap: 1.5rem;
  margin-top: 2rem;

  display: flex;
`;

const PostNickname = styled.div`
  font-size: 1.5rem;
  font-family: Pretendard;
  color: #777;
`;

const PostDate = styled.div`
  font-size: 1.5rem;
  font-family: Pretendard;
  color: #777;
`;
