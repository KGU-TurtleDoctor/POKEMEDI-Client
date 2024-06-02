import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Common/Header';
import { api } from '../libs/api';

function CommunityPost() {
  const navigate = useNavigate();
  const [titleWriting, setTitleWriting] = useState('');
  const [postWriting, setPostWriting] = useState('');

  const [isSatisfied, setIsSatisfied] = useState(false);

  const handleClickWritingDoneButton = () => {
    if (isSatisfied) {
      api
        .post(
          'api/community/create',
          {
            title: titleWriting,
            body: postWriting,
          },
          { withCredentials: true },
        )
        .then(() => {
          navigate('/community-list');
        });
    }
  };

  const handleChangeTitleInput = (e) => {
    setTitleWriting(e.target.value);
  };

  const handleChangePostInput = (e) => {
    setPostWriting(e.target.value);
  };

  useEffect(() => {
    if (titleWriting[0] === ' ') {
      setTitleWriting(titleWriting.substring(1, titleWriting.length));
    }

    if (titleWriting.length > 50) {
      setTitleWriting(titleWriting.substring(0, 50));
    }

    if (postWriting[0] === ' ') {
      setPostWriting(postWriting.substring(1, postWriting.length));
    }

    if (postWriting.length > 500) {
      setPostWriting(postWriting.substring(0, 500));
    }

    if (titleWriting.trim().length !== 0 && postWriting.trim().length !== 0) {
      setIsSatisfied(true);
    } else {
      setIsSatisfied(false);
    }
  }, [titleWriting, postWriting]);

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
              <TitleInput
                type="text"
                placeholder="제목을 입력해주세요."
                onChange={handleChangeTitleInput}
                value={titleWriting}
              />
              <TextCount>{`(${titleWriting.length} / 50)`}</TextCount>
            </TitleDiv>
          </PostTitleWrapper>
          <PostTextWrapper>
            <PostTextBox>
              <PostText>본문</PostText>
            </PostTextBox>
            <PostDiv>
              <TextInput
                type="text"
                placeholder="본문을 입력해주세요."
                onChange={handleChangePostInput}
                value={postWriting}
              />
              <TextCount>{`(${postWriting.length} / 500)`}</TextCount>
            </PostDiv>
          </PostTextWrapper>
          <WritingDoneBox>
            <WritingDoneButton
              onClick={handleClickWritingDoneButton}
              isSatisfied={isSatisfied}
            >
              작성 완료
            </WritingDoneButton>
          </WritingDoneBox>
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
  min-height: calc(100vh - 8rem);
  padding: 0 calc((100% - 81.2rem) / 2);
  margin-top: 8rem;

  background-color: #f1f5f9;
`;

const CommunityPostBoxWrapper = styled.div`
  width: 81.2rem;
  padding: 8rem 10rem;

  background-color: white;
  font-size: 2rem;

  display: flex;
  flex-direction: column;
  gap: 5rem;
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

const TextCount = styled.p`
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

  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

const WritingDoneBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const WritingDoneButton = styled.button`
  width: 10rem;
  height: 3.75rem;

  border-radius: 0.7rem;

  font-size: 1.75rem;
  font-weight: 500;

  background-color: ${({ isSatisfied }) => (isSatisfied ? '#04293f' : 'grey')};
  color: white;
`;
