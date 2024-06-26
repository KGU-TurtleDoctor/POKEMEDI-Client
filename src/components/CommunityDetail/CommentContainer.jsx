import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IcSendBlack, IcTrashCan } from '../../assets/svg/icon';
import { api } from '../../libs/api';
import DeleteModal from '../Common/DeleteModal';
import Reply from './Reply';

function CommentContainer({
  commentId,
  nickName,
  body,
  time,
  isWriter,
  replies,
  setCommentList,
}) {
  const [replyText, setReplyText] = useState('');
  const [isReplyMode, setIsReplyMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { postId } = useParams();

  const handleChangeReplyInput = (e) => {
    setReplyText(e.target.value);
  };

  const handleClickReplyButton = () => {
    setIsReplyMode(!isReplyMode);
  };

  const handleClickReplySendButton = () => {
    if (replyText.length !== 0) {
      api
        .post(
          `/api/community/posts/${postId}/comments/${commentId}/replies`,
          {
            body: replyText,
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
              }
            });
          setReplyText('');
        });
    }
  };

  const handleClickDeleteCommentButton = () => {
    setIsModalOpen(true);
  };

  const handleClickYesModalButton = () => {
    api
      .delete(`/api/community/posts/${postId}/comments/${commentId}`, {
        withCredentials: true,
      })
      .then(() => {
        api
          .get(`/api/community/posts/${postId}/comments`, {
            withCredentials: true,
          })
          .then((res) => {
            if (Array.isArray(res.data.result)) {
              setCommentList(res.data.result);
            }
          });
      });
  };

  const handleClickNoModalButton = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      {isModalOpen && (
        <DeleteModal
          handleClickYesModalButton={handleClickYesModalButton}
          handleClickNoModalButton={handleClickNoModalButton}
        />
      )}
      <CommentContainerWrapper>
        <CommentWrapper>
          {isWriter && (
            <CommentTrashButton onClick={handleClickDeleteCommentButton}>
              <StyledIcTrashCan />
            </CommentTrashButton>
          )}
          <CommentWriter>{nickName}</CommentWriter>
          <CommentContent>{body}</CommentContent>
          <BottomContainer>
            <CommentDate>{time}</CommentDate>
            <ReplyButton onClick={handleClickReplyButton}>
              {isReplyMode
                ? '접기'
                : replies.length !== 0
                ? `답글 열기 (${replies.length})`
                : '새 답글 달기'}
            </ReplyButton>
          </BottomContainer>
        </CommentWrapper>
        {isReplyMode && (
          <ReplyListWrapper $isReplyMode={isReplyMode}>
            {replies.map((reply) => (
              <Reply
                key={reply.replyId}
                {...reply}
                commentId={commentId}
                setCommentList={setCommentList}
              />
            ))}
            <ReplyInputContainer>
              <ReplyInputWrapper>
                <ReplyInput
                  placeholder="답글을 입력해주세요"
                  onChange={handleChangeReplyInput}
                  value={replyText}
                />
                <ReplySendButton onClick={handleClickReplySendButton}>
                  <IcSendBlack />
                </ReplySendButton>
              </ReplyInputWrapper>
            </ReplyInputContainer>
          </ReplyListWrapper>
        )}
      </CommentContainerWrapper>
    </React.Fragment>
  );
}

export default CommentContainer;

const CommentContainerWrapper = styled.div`
  width: 100%;
`;

const CommentWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.2rem;

  position: relative;

  width: 100%;
  padding: 2.5rem 2rem 2rem 2rem;

  border-radius: 1rem;
  background-color: #f1f5f9;
`;

const CommentTrashButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;

  width: 1.8rem;
  height: 1.8rem;
`;

const StyledIcTrashCan = styled(IcTrashCan)`
  fill: #04293f;
`;

const CommentWriter = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  font-family: Pretendard;
`;

const CommentContent = styled.p`
  width: 100%;

  font-size: 1.5rem;
  font-family: Pretendard;

  line-height: 140%;
  white-space: pre-wrap;
`;

const BottomContainer = styled.div`
  display: flex;
  column-gap: 1.5rem;

  margin-top: 0.5rem;
`;

const CommentDate = styled.p`
  color: #8898a7;
  font-size: 1.3rem;
  font-family: Pretendard;
`;

const ReplyButton = styled.button`
  font-size: 1.3rem;
  font-family: Pretendard;
`;

const ReplyInputContainer = styled.section`
  display: flex;
  justify-content: flex-end;

  width: 100%;
`;

const ReplyInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: 5rem;
  padding: 0 1rem 0 2rem;

  border: 0.1rem solid black;
  border-radius: 0.8rem;
`;

const ReplyInput = styled.input`
  width: 90%;
  height: 100%;

  font-size: 1.5rem;
  font-family: Pretendard;

  border: none;
`;

const ReplySendButton = styled.button`
  width: 4rem;
  height: 4rem;
  padding-top: 0.3rem;
`;

const ReplyListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;

  width: 100%;
  margin-top: ${({ $isReplyMode }) => $isReplyMode && '2rem'};
`;
