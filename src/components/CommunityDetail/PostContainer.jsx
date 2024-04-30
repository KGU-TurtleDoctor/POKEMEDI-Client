import React, { useState } from 'react';
import styled from 'styled-components';
import {
  IcCalendar,
  IcSendBlack,
  IcTrashCan,
  IcTurnUp,
  IcUser,
} from '../../assets/svg/icon';

const commentList = [
  {
    commentId: 12,
    nickName: '김태완',
    body: '새로 작성한 댓글입니다.',
    time: '2024.04.16 20:45',
    replies: [
      {
        replyId: 3,
        body: '첫 답글입니다.',
        time: '2024.04.16 20:48',
        nickName: '김태완',
      },
      {
        replyId: 4,
        body: '두번째 답글입니다.',
        time: '2024.04.16 20:48',
        nickName: '김태완',
      },
    ],
  },
  {
    commentId: 13,
    nickName: '김태완',
    body: '두번째 작성한 댓글입니다.',
    time: '2024.04.16 20:46',
    replies: [],
  },
];

function PostContainer() {
  const [isReplyMode, setIsReplyMode] = useState(false);

  const handleClickReplyButton = () => {
    setIsReplyMode(!isReplyMode);
  };

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
        <CommentCount>{`댓글 ${commentList.length}개`}</CommentCount>
        <CommentListWrapper>
          <Comment>
            <CommentWrapper>
              <CommentTrashButton>
                <StyledIcTrashCan />
              </CommentTrashButton>
              <CommentWriter>모찌</CommentWriter>
              <CommentContent>세숑아 괜찮아...?? ㅠㅠㅠ</CommentContent>
              <BottomContainer>
                <CommentDate>2019. 12. 10</CommentDate>
                <ReplyButton onClick={handleClickReplyButton}>
                  {isReplyMode ? '취소' : '답글 달기'}
                </ReplyButton>
              </BottomContainer>
            </CommentWrapper>
            {isReplyMode && (
              <ReplyInputContainer>
                <ReplyInputWrapper>
                  <ReplyInput placeholder="답글을 입력해주세요" />
                  <ReplySendButton>
                    <IcSendBlack />
                  </ReplySendButton>
                </ReplyInputWrapper>
              </ReplyInputContainer>
            )}
            <ReplyListWrapper>
              <ReplyContainer>
                <IcTurnRight />
                <ReplyWrapper>
                  <ReplyWriter>랑곰이</ReplyWriter>
                  <ReplyContent>
                    숑아 압빠가 초밥을 잘못 만든 게 아니라 너가 밥 먹고 바로
                    누워서 그래!!
                  </ReplyContent>
                  <ReplyDate>2019. 12. 10</ReplyDate>
                </ReplyWrapper>
              </ReplyContainer>
              <ReplyContainer>
                <IcTurnRight />
                <ReplyWrapper>
                  <ReplyTrashButton>
                    <StyledIcTrashCan />
                  </ReplyTrashButton>
                  <ReplyWriter>쭈카</ReplyWriter>
                  <ReplyContent>랑곰이 말이 마댜</ReplyContent>
                  <ReplyDate>2019. 12. 10</ReplyDate>
                </ReplyWrapper>
              </ReplyContainer>
              <ReplyContainer>
                <IcTurnRight />
                <ReplyWrapper>
                  <ReplyWriter>이세숑</ReplyWriter>
                  <ReplyContent>힝!!! 힝!!!</ReplyContent>
                  <ReplyDate>2019. 12. 10</ReplyDate>
                </ReplyWrapper>
              </ReplyContainer>
              <ReplyContainer>
                <IcTurnRight />
                <ReplyWrapper>
                  <ReplyWriter>숑맘</ReplyWriter>
                  <ReplyContent>세숑아 압빠가 잘못해따 구치!!!</ReplyContent>
                  <ReplyDate>2019. 12. 10</ReplyDate>
                </ReplyWrapper>
              </ReplyContainer>
              <ReplyContainer>
                <IcTurnRight />
                <ReplyWrapper>
                  <ReplyWriter>숑빠</ReplyWriter>
                  <ReplyContent>
                    누우가 그래쑝!!! 우리 쇼옹이한테엑!!!!
                  </ReplyContent>
                  <ReplyDate>2019. 12. 10</ReplyDate>
                </ReplyWrapper>
              </ReplyContainer>
            </ReplyListWrapper>
          </Comment>
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
  /* min-height: 40rem; */
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

const Comment = styled.div``;

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
`;

const CommentContent = styled.p`
  width: 100%;

  font-size: 1.5rem;

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
`;

const ReplyButton = styled.button`
  font-size: 1.3rem;
`;

const ReplyListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;

  width: 100%;
  margin-top: 2rem;
`;

const ReplyContainer = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 2rem;

  width: 100%;
`;

const IcTurnRight = styled(IcTurnUp)`
  width: 2rem;
  height: 2rem;

  rotate: 90deg;
  fill: #04293f;
`;

const ReplyWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.2rem;

  position: relative;

  width: 85%;

  padding: 2rem 2rem 1.5rem 2rem;

  border-radius: 1rem;
  background-color: #f1f5f9;
`;

const ReplyTrashButton = styled.button`
  position: absolute;
  top: 1.7rem;
  right: 1.7rem;

  width: 1.5rem;
  height: 1.5rem;
`;

const ReplyWriter = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
`;

const ReplyContent = styled.p`
  width: 100%;

  font-size: 1.4rem;

  white-space: pre-wrap;
`;

const ReplyDate = styled.p`
  margin-top: 0.3rem;

  color: #8898a7;
  font-size: 1.2rem;
`;

const ReplyInputContainer = styled.section`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  margin-top: 3rem;
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

  border: none;
`;

const ReplySendButton = styled.button`
  width: 4rem;
  height: 4rem;
  padding-top: 0.3rem;
`;
