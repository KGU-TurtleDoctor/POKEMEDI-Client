import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcTrashCan, IcUpdate } from '../../assets/svg/icon';
import { api } from '../../libs/api';

function ListItem({ id, title, content, nickname, date, updateList, writer }) {
  const navigate = useNavigate();

  const [isUpdated, setIsUpdated] = useState(false);

  const handleClickListItem = () => {
    navigate(`/community/post/${id}`);
  };

  const handleClickUpdateButton = () => {
    navigate(`/community/edit/${id}`);
  };

  const handleClickDeleteButton = () => {
    api
      .delete(`/api/community/delete/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        api.get('api/community/list', { withCredentials: true }).then((res) => {
          if (Array.isArray(res.data.result)) {
            updateList(res.data.result);
          }
        });
      });
  };
  return (
    <PostWrapper>
      {writer && (
        <>
          <CommentUpdateButton
            onClick={handleClickUpdateButton}
            isUpdated={isUpdated}
          >
            <StyledIcUpdate />
          </CommentUpdateButton>
          <CommentDeleteButton onClick={handleClickDeleteButton}>
            <StyledIcTrashCan />
          </CommentDeleteButton>
        </>
      )}
      <PostContentWrapper onClick={handleClickListItem}>
        <PostTitle>{title}</PostTitle>
        <PostContent>{content}</PostContent>
        <PostInfo>
          <PostNickname>{nickname}</PostNickname>
          <PostDate>{date}</PostDate>
        </PostInfo>
      </PostContentWrapper>
    </PostWrapper>
  );
}

export default ListItem;

const PostWrapper = styled.div`
  position: relative;

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

const PostContentWrapper = styled.div`
  width: 100%;
  height: 100%;
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

const PostContent = styled.div`
  font-size: 1.6rem;
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
  align-items: center;
`;

const PostNickname = styled.div`
  font-size: 1.5rem;
  color: #777;
`;

const PostDate = styled.div`
  font-size: 1.5rem;
  color: #777;

  margin-right: 17rem;
`;

const StyledIcUpdate = styled(IcUpdate)`
  width: 2.5rem;
  height: 2.5rem;
`;

const StyledIcTrashCan = styled(IcTrashCan)`
  fill: #04293f;
`;

const CommentUpdateButton = styled.button`
  position: absolute;
  bottom: 2.3rem;
  right: 6rem;

  width: 1.8rem;
  height: 1.8rem;
`;

const CommentDeleteButton = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  width: 1.8rem;
  height: 1.8rem;
`;
