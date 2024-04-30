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
            </PostTitleBox>
            <TitleDiv>
              <TitleInput type="text" placeholder="제목을 입력해주세요." />
              <PostTextCount>(0 / 50)</PostTextCount>
            </TitleDiv>
          </PostTitleWrapper>
          <PostTextWrapper>
            <PostTextBox>
              <PostText>본문</PostText>
            </PostTextBox>
            <PostDiv>
              <TextInput type="text" placeholder="본문을 입력해주세요." />
              <PostTextCount>(0 / 500)</PostTextCount>
            </PostDiv>
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

  padding: 0 37.5rem;
  margin-top: 8rem;

  background-color: #f1f5f9;
`;

const CommunityPostBoxWrapper = styled.div`
  width: calc(100vw - 75rem);
  min-height: calc(100vh - 8rem);
  padding: 10rem 20rem 10rem 20rem;

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

const PostTextCount = styled.p`
  font-size: 1.5rem;
  color: #9e9e9e;
`;

const TitleDiv = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;

  background-color: #f1f5f9;
  border: 0.05rem solid #9e9e9e;
  font-size: 2rem;
  border-radius: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleInput = styled.input`
  width: 80%;
  height: 4.6rem;

  background-color: #f1f5f9;
  border: none;
  font-size: 2rem;
  border-radius: 2rem;
`;

const PostDiv = styled.div`
  width: 100%;
  height: 46.3rem;
  padding: 2rem;

  background-color: #f1f5f9;
  border: 0.05rem solid #9e9e9e;
  border-radius: 1.5rem;

  font-size: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TextInput = styled.textarea`
  width: 100%;
  height: 92%;
  margin-bottom: 3%;

  font-size: 2rem;
  background-color: #f1f5f9;

  resize: none;

  border: none;

  overflow: hidd;

  &:focus {
    outline: none;
  }
`;
