import React from 'react';
import styled from 'styled-components';
import { IcCalendar, IcUser } from '../../assets/svg/icon';

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
    </PostContainerWrapper>
  );
}

export default PostContainer;

const PostContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: #ffffff;
`;

const PostHeader = styled.div`
  width: 90%;
  padding: 9rem 0 2rem 0;

  /* border-bottom: 0.1rem solid rgb(211, 211, 211); */

  /* border: 1px solid red; */
`;

const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 600;

  /* border: 1px solid green; */
`;

const PostInfo = styled.div`
  display: flex;
  column-gap: 3rem;

  margin-top: 2.5rem;
  /* padding-left: 1rem; */
  /* border: 1px solid green; */
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

const PostDate = styled.p`
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
  padding: 5rem 0;

  font-size: 2rem;
  font-weight: 400;

  line-height: 140%;

  border-top: 0.1rem solid rgb(211, 211, 211);
`;

const CommentWrapper = styled.article`
  width: 90%;
  padding: 5rem 0;

  font-size: 2rem;
  font-weight: 400;

  line-height: 140%;

  border-top: 0.1rem solid rgb(211, 211, 211);
`;
