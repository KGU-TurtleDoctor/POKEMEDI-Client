import React from 'react';
import styled from 'styled-components';
import { IcCalendar, IcUser } from '../../assets/svg/icon';
import CommentContainer from './CommentContainer';

function PostContainer({ commentList, postData, setCommentList }) {
  return (
    <PostContainerWrapper>
      <PostHeader>
        <PostTitle>{postData?.title}</PostTitle>
        <PostInfo>
          <PostUser>
            <IcUser />
            <PostUserName>{postData?.nickname}</PostUserName>
          </PostUser>
          <PostDate>
            <IcCalendar />
            <PostDateText>{postData?.date}</PostDateText>
          </PostDate>
        </PostInfo>
      </PostHeader>
      <PostBody>{postData?.content}</PostBody>
      <CommentSectionWrapper>
        <CommentCount>{`댓글 ${commentList.length}개`}</CommentCount>
        <CommentListWrapper>
          {commentList.map((comment) => (
            <CommentContainer
              key={comment.commentId}
              {...comment}
              setCommentList={setCommentList}
            />
          ))}
        </CommentListWrapper>
      </CommentSectionWrapper>
    </PostContainerWrapper>
  );
}

export default PostContainer;

const PostContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: calc(100vh - 8rem);

  background-color: #ffffff;
`;

const PostHeader = styled.div`
  width: 90%;
  padding: 9rem 0 2rem 0;
`;

const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 600;

  line-height: 130%;
`;

const PostInfo = styled.div`
  display: flex;
  column-gap: 3rem;

  margin-top: 2.5rem;
`;

const PostUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const PostUserName = styled.p`
  padding-top: 0.2rem;

  color: #8898a7;

  font-size: 1.8rem;
  font-weight: 400;
`;

const PostDate = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  padding-bottom: 0.2rem;

  color: #8898a7;

  font-size: 1.8rem;
  font-weight: 400;
`;

const PostDateText = styled.p`
  padding-top: 0.4rem;

  color: #8898a7;

  font-size: 1.8rem;
  font-weight: 400;
`;

const PostBody = styled.section`
  width: 90%;
  padding: 5rem 1rem;

  font-size: 1.8rem;
  font-weight: 400;

  line-height: 150%;
  white-space: pre-wrap;

  border-top: 0.1rem solid rgb(211, 211, 211);
  border-bottom: 0.1rem solid rgb(211, 211, 211);
`;

const CommentSectionWrapper = styled.section`
  width: 90%;
  padding: 5rem 3rem;
`;

const CommentCount = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

const CommentListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  width: 100%;
  padding: 5rem 3rem;
`;
