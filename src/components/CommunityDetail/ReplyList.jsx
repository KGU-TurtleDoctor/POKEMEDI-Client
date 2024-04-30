import React from 'react';
import styled from 'styled-components';
import { IcTrashCan, IcTurnUp } from '../../assets/svg/icon';

function ReplyList() {
  return (
    <ReplyListWrapper>
      <ReplyContainer>
        <IcTurnRight />
        <ReplyWrapper>
          <ReplyWriter>랑곰이</ReplyWriter>
          <ReplyContent>
            숑아 압빠가 초밥을 잘못 만든 게 아니라 너가 밥 먹고 바로 누워서
            그래!!
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
          <ReplyContent>누우가 그래쑝!!! 우리 쇼옹이한테엑!!!!</ReplyContent>
          <ReplyDate>2019. 12. 10</ReplyDate>
        </ReplyWrapper>
      </ReplyContainer>
    </ReplyListWrapper>
  );
}

export default ReplyList;

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
