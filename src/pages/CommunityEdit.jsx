import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Common/Header';
import { api } from '../libs/api';
import Loading from './Loading';

function CommunityEdit() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [titleWriting, setTitleWriting] = useState();
  const [postWriting, setPostWriting] = useState();

  const [isSatisfied, setIsSatisfied] = useState(false);

  useEffect(() => {
    api
      .get(`/api/community/detail/${postId}`, {
        withCredentials: true,
      })
      .then((res) => {
        setTitleWriting(res.data.result.title);
        setPostWriting(res.data.result.content);
      });
  }, []);

  const handleClickEditingDoneButton = () => {
    if (isSatisfied) {
      api
        .put(
          `api/community/update/${postId}`,
          {
            title: titleWriting,
            body: postWriting,
          },
          { withCredentials: true },
        )
        .then(() => {
          navigate(`/community/post/${postId}`);
        });
    }
  };

  const handleChangeEditTitleInput = (e) => {
    setTitleWriting(e.target.value);
  };

  const handleChangeEditPostInput = (e) => {
    setPostWriting(e.target.value);
  };

  useEffect(() => {
    if (titleWriting && titleWriting[0] === ' ') {
      setTitleWriting(titleWriting.substring(1, titleWriting.length));
    }

    if (titleWriting && titleWriting.length > 50) {
      setTitleWriting(titleWriting.substring(0, 50));
    }

    if (postWriting && postWriting[0] === ' ') {
      setPostWriting(postWriting.substring(1, postWriting.length));
    }

    if (postWriting && postWriting.length > 500) {
      setPostWriting(postWriting.substring(0, 500));
    }

    if (
      titleWriting &&
      titleWriting.trim().length !== 0 &&
      postWriting &&
      postWriting.trim().length !== 0
    ) {
      setIsSatisfied(true);
    } else {
      setIsSatisfied(false);
    }
  }, [titleWriting, postWriting]);

  if (!titleWriting || !postWriting) {
    return <Loading />;
  }

  return (
    <CommunityEditWrapper>
      <Header />

      <CommunityEditBodyWrapper>
        <CommunityEditBoxWrapper>
          <EditTitleWrapper>
            <EditTitleBox>
              <EditTitle>제목</EditTitle>
            </EditTitleBox>
            <EditTitleDiv>
              <EditTitleInput
                type="text"
                placeholder="제목을 입력해주세요."
                onChange={handleChangeEditTitleInput}
                value={titleWriting}
              />
              <EditTextCount>{`(${titleWriting.length} / 50)`}</EditTextCount>
            </EditTitleDiv>
          </EditTitleWrapper>
          <EditTextWrapper>
            <EditTextBox>
              <EditText>본문</EditText>
            </EditTextBox>
            <EditDiv>
              <EditTextInput
                type="text"
                placeholder="본문을 입력해주세요."
                onChange={handleChangeEditPostInput}
                value={postWriting}
              />
              <EditTextCount>{`(${postWriting.length} / 500)`}</EditTextCount>
            </EditDiv>
          </EditTextWrapper>
          <EditingDoneBox>
            <EditingDoneButton
              onClick={handleClickEditingDoneButton}
              isSatisfied={isSatisfied}
            >
              수정 완료
            </EditingDoneButton>
          </EditingDoneBox>
        </CommunityEditBoxWrapper>
      </CommunityEditBodyWrapper>
    </CommunityEditWrapper>
  );
}

export default CommunityEdit;

const CommunityEditWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const CommunityEditBodyWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8rem);
  padding: 0 calc((100% - 81.2rem) / 2);
  margin-top: 8rem;

  background-color: #f1f5f9;
`;

const CommunityEditBoxWrapper = styled.div`
  width: 81.2rem;
  padding: 8rem 10rem;

  background-color: white;
  font-size: 2rem;

  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const EditTitleWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EditTextWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EditTitleBox = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

const EditTextBox = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

const EditTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;
`;

const EditText = styled.div`
  font-weight: bold;
  font-size: 3rem;
`;

const EditTextCount = styled.p`
  font-size: 1.5rem;
  color: #9e9e9e;
`;

const EditTitleDiv = styled.div`
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

const EditTitleInput = styled.input`
  width: 80%;
  height: 4.6rem;

  background-color: #f1f5f9;
  border: none;
  font-size: 2rem;
  border-radius: 2rem;
`;

const EditDiv = styled.div`
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

const EditTextInput = styled.textarea`
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

const EditingDoneBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const EditingDoneButton = styled.button`
  width: 10rem;
  height: 3.75rem;

  border-radius: 0.7rem;

  font-size: 1.75rem;
  font-weight: 500;

  background-color: ${({ isSatisfied }) => (isSatisfied ? '#04293f' : 'grey')};
  color: white;
`;
