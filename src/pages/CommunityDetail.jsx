import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IcSendBlack } from '../assets/svg/icon';
import Header from '../components/Common/Header';
import PostContainer from '../components/CommunityDetail/PostContainer';
import { api } from '../libs/api';
import Loading from './Loading';

function CommunityDetail() {
  const { postId } = useParams();
  const commentEndRef = useRef(null);

  const [commentList, setCommentList] = useState();
  const [postData, setPostData] = useState();
  const [commentText, setCommentText] = useState();
  const [prevCommentCount, setPrevCommentCount] = useState(0);

  useEffect(() => {
    api
      .get(`/api/community/detail/${postId}`, { withCredentials: true })
      .then((res) => {
        setPostData(res.data.result);
      })
      .catch(() => {
        navigate('/login-error');
      });

    api
      .get(`/api/community/posts/${postId}/comments`, { withCredentials: true })
      .then((res) => {
        if (Array.isArray(res.data.result)) {
          setCommentList(res.data.result);
          setPrevCommentCount(res.data.result.length);
        }
      });
  }, []);

  useEffect(() => {
    if (commentList?.length > prevCommentCount) {
      if (commentEndRef.current) {
        commentEndRef.current.scrollIntoView();
      }
    }
    setPrevCommentCount(commentList?.length);
  }, [commentList]);

  const handleChangeCommentInput = (e) => {
    setCommentText(e.target.value);
  };

  const handleClickCommentSendButton = () => {
    if (commentText.length !== 0) {
      api
        .post(
          `/api/community/posts/${postId}/comments`,
          {
            body: commentText,
          },
          { withCredentials: true },
        )
        .then(() => {
          api
            .get(`/api/community/posts/${postId}/comments`, {
              withCredentials: true,
            })
            .then((res) => {
              if (Array.isArray(res.data.result)) {
                setCommentList(res.data.result);
                commentEndRef.current.scrollIntoView();
              }
            });
          setCommentText('');
        });
    }
  };

  if (!commentList || !postData) {
    return <Loading />;
  }

  return (
    <CommunityDetailPageWrapper>
      <Header />
      <CommunityDetailPageBodyWrapper>
        <PostContainer
          commentList={commentList}
          postData={postData}
          setCommentList={setCommentList}
        />
        <div ref={commentEndRef}></div>
      </CommunityDetailPageBodyWrapper>
      <CommentInputContainer>
        <CommentInputWrapper>
          <CommentInput
            placeholder="댓글을 입력해주세요"
            onChange={handleChangeCommentInput}
            value={commentText}
          />
          <CommentSendButton onClick={handleClickCommentSendButton}>
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
  font-family: Pretendard;

  border: none;
`;

const CommentSendButton = styled.button`
  width: 4rem;
  height: 4rem;
  padding-top: 0.3rem;
`;
