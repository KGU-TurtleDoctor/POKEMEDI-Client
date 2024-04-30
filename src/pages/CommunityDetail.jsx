import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IcSendBlack } from '../assets/svg/icon';
import Header from '../components/Common/Header';
import PostContainer from '../components/CommunityDetail/PostContainer';

function CommunityDetail() {
  const { id } = useParams();

  console.log(id);

  return (
    <CommunityDetailPageWrapper>
      <Header />
      <CommunityDetailPageBodyWrapper>
        <PostContainer postId={id} />
      </CommunityDetailPageBodyWrapper>
      <CommentInputContainer>
        <CommentInputWrapper>
          <CommentInput placeholder="댓글을 입력해주세요" />
          <CommentSendButton>
            <IcSendBlack />
          </CommentSendButton>
        </CommentInputWrapper>
      </CommentInputContainer>
    </CommunityDetailPageWrapper>
  );
}

export default CommunityDetail;

const CommunityDetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const CommunityDetailPageBodyWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8rem);
  margin-top: 8rem;
  padding: 0 calc((100% - 81.2rem) / 2);

  background-color: #f1f5f9;
`;

const CommentInputContainer = styled.section`
  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 81.2rem;
  height: 7rem;

  background-color: #04293f;
`;

const CommentInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  height: 5rem;
  padding: 0 1rem 0 2rem;

  border-radius: 0.8rem;

  background-color: #ffffff;
`;

const CommentInput = styled.input`
  width: 90%;
  height: 100%;

  font-size: 1.5rem;

  border: none;
`;

const CommentSendButton = styled.button`
  width: 4rem;
  height: 4rem;
  padding-top: 0.3rem;
`;
