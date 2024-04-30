import React from 'react';
import styled from 'styled-components';
import { IcCalendar, IcUser } from '../../assets/svg/icon';
import CommentContainer from './CommentContainer';

const data = [
  {
    commentId: 12,
    nickName: '김태완',
    body: '새로 작성한 댓글입니다.',
    time: '2024.04.16 20:45',
    isWriter: true,
    isPostWriter: true,
    replies: [
      {
        replyId: 3,
        body: '첫 답글입니다.',
        time: '2024.04.16 20:48',
        nickName: '김태완',
        isWriter: true,
        isPostWriter: false,
      },
      {
        replyId: 4,
        body: '두번째 답글입니다.',
        time: '2024.04.16 20:48',
        nickName: '김태완',
        isWriter: false,
        isPostWriter: false,
      },
    ],
  },
  {
    commentId: 13,
    nickName: '김태완',
    body: '새로 작성한 댓글입니다.',
    time: '2024.04.16 20:45',
    isWriter: true,
    isPostWriter: true,
    replies: [
      {
        replyId: 5,
        body: '첫 답글입니다.',
        time: '2024.04.16 20:48',
        nickName: '김태완',
        isWriter: true,
        isPostWriter: false,
      },
      {
        replyId: 6,
        body: '두번째 답글입니다.',
        time: '2024.04.16 20:48',
        nickName: '김태완',
        isWriter: false,
        isPostWriter: false,
      },
    ],
  },
];

function PostContainer() {
  return (
    <PostContainerWrapper>
      <PostHeader>
        <PostTitle>어떤 약을 복용해야 하숑...?</PostTitle>
        <PostInfo>
          <PostUser>
            <IcUser />
            <PostUserName>이세숑</PostUserName>
          </PostUser>
          <PostDate>
            <IcCalendar />
            <PostDateText>2024. 03. 14</PostDateText>
          </PostDate>
        </PostInfo>
      </PostHeader>
      <PostBody>
        오늘 압빠가 만들어준 초밥을 먹엇숑 . 군데 갑자기 배가 슬슬
        아파오는거숑!!! 쇼옹이한테 문제가 생긴것같숑. 어떤 약을 먹어야 하숑???
        쇼옹이에게 댓글로 말해주숑. 기다리겟숑
      </PostBody>
      <CommentSectionWrapper>
        <CommentCount>{`댓글 ${data.length}개`}</CommentCount>
        <CommentListWrapper>
          {data.map((comment) => (
            <CommentContainer key={comment.length} {...comment} />
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
  row-gap: 3rem;

  width: 100%;
  padding: 5rem 3rem;
`;
