import React from 'react';
import styled from 'styled-components';
import Header from '../components/Common/Header';

function CommunityPost() {
  return (
    <CommunityPostWrapper>
      <Header />
      <CommunityPostBodyWrapper>
        <CommunityPostBoxWrapper>
          <PostTitleWrapper>
            <PostTitleBox>
              <PostTitle>제목</PostTitle>
              <PostTextCount>(0 / 50)</PostTextCount>
            </PostTitleBox>
            <TitleInput type="text" placeholder="제목을 입력해주세요." />
          </PostTitleWrapper>
          <PostTextWrapper>
            <PostTextBox>
              <PostText>본문</PostText>
              <PostTextCount>(0 / 1000)</PostTextCount>
            </PostTextBox>
            <TextInput type="text" placeholder="본문을 입력해주세요." />
          </PostTextWrapper>
        </CommunityPostBoxWrapper>
      </CommunityPostBodyWrapper>
    </CommunityPostWrapper>
  );
}

export default CommunityPost;

const CommunityPostWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const CommunityPostBodyWrapper = styled.div`
  width: 100%;
  //height: calc(100vh - 8rem);
  padding: 0 37.5rem;
  margin-top: 8rem;

  background-color: #f1f5f9;
`;

const CommunityPostBoxWrapper = styled.div`
  width: calc(100vw - 75rem);
  padding: 10rem 20rem 10rem 20rem;
  height: calc(100vh - 8rem);

  background-color: white;
  font-size: 2rem;
`;

const PostTitleWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PostTextWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 5rem;
`;

const PostTitleBox = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PostTextBox = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PostTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;
`;

const PostText = styled.div`
  font-weight: bold;
  font-size: 3rem;
`;

const PostTextCount = styled.div`
  font-size: 2rem;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 5rem;

  background-color: #f1f5f9;

  font-size: 2rem;
  border-radius: 1.5rem;
  border: 0.05rem solid #9e9e9e;

  padding-left: 2rem;
`;

const TextInput = styled.textarea`
  width: 100%;
  height: 30rem;

  resize: none;
  padding: 2rem;

  background-color: #f1f5f9;

  font-size: 2rem;
  border-radius: 1.5rem;
  border: 0.05rem solid #9e9e9e;
`;
