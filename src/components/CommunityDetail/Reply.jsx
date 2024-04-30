import React from 'react';
import styled from 'styled-components';
import { IcTrashCan, IcTurnUp } from '../../assets/svg/icon';

function Reply({ body, time, nickName, isWriter }) {
  return (
    <ReplyContainerWrapper>
      <IcTurnRight />
      <ReplyWrapper>
        {isWriter && (
          <ReplyTrashButton>
            <StyledIcTrashCan />
          </ReplyTrashButton>
        )}
        <ReplyWriter>{nickName}</ReplyWriter>
        <ReplyContent>{body}</ReplyContent>
        <ReplyDate>{time}</ReplyDate>
      </ReplyWrapper>
    </ReplyContainerWrapper>
  );
}

export default Reply;

const ReplyContainerWrapper = styled.li`
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

const ReplyWrapper = styled.article`
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

const StyledIcTrashCan = styled(IcTrashCan)`
  fill: #04293f;
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
