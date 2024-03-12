import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import chatImg from '../../assets/img/chat.png';
import communityImg from '../../assets/img/community.png';

const MenuBox = React.forwardRef(({ isVisible, type }, ref) => {
  return type === 1 ? (
    <MenuBoxWrapper ref={ref} fadetype={isVisible ? 'in' : 'out'}>
      <ImgContainer>
        <MenuImg src={chatImg} />
      </ImgContainer>
      <DescriptionContainer type={type}>
        <DescriptionContainerTitle>AI 진단</DescriptionContainerTitle>
        <Description type={type}>
          일상 속의 통증, 원인이 궁금하지 않으셨나요? AI 챗봇에게 모두
          물어보세요!
        </Description>
        <LinkButton>AI 진단 바로가기</LinkButton>
      </DescriptionContainer>
    </MenuBoxWrapper>
  ) : (
    <MenuBoxWrapper ref={ref} fadetype={isVisible ? 'in' : 'out'} type={type}>
      <DescriptionContainer>
        <DescriptionContainerTitle>커뮤니티</DescriptionContainerTitle>
        <Description type={type}>
          의료 관련 질문을 커뮤니티에 게시해 보세요. 사람들 혹은 의사가 답변해
          줄 거예요!
        </Description>
        <LinkButton>커뮤니티 바로가기</LinkButton>
      </DescriptionContainer>
      <ImgContainer>
        <MenuImg src={communityImg} />
      </ImgContainer>
    </MenuBoxWrapper>
  );
});

const fadeup = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const fadeout = keyframes`
  from {
    opacity: 1;
    transform: translateZ(0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;

const MenuBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 94rem;
  height: 35rem;
  padding: 2.5rem;

  border: 0.1rem solid rgb(226 232 240 / 0.4);
  border-radius: 2.25rem;
  box-shadow: rgba(0, 0, 33, 0.03) 0px 16px 22.4px 4.8px,
    rgba(0, 0, 33, 0.03) 0px 3.2px 16px 0px,
    rgba(0, 0, 33, 0.03) 0px 0px 1px 0px;

  background-color: #f1f5f9;

  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  ${({ fadetype }) =>
    fadetype === 'in'
      ? css`
          animation-name: ${fadeup};
        `
      : css`
          animation-name: ${fadeout};
        `}
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;
`;

const DescriptionContainer = styled.div`
  width: 50%;
  margin-left: ${(props) => (props.type === 1 ? '0' : '7.5rem')};
`;

const DescriptionContainerTitle = styled.h2`
  font-size: 4.4rem;
  font-weight: 600;
`;

const Description = styled.p`
  margin-top: 3.75rem;
  padding-right: ${(props) => (props.type === 1 ? '2.5rem' : '0')};

  font-size: 2.25rem;
  font-weight: 400;

  line-height: 3.1rem;
`;

const MenuImg = styled.img`
  width: 33.75rem;
`;

const LinkButton = styled.button`
  display: flex;

  margin-top: 2.5rem;
  padding: 1.25rem 1.875rem;

  color: white;
  background-color: #04293f;

  font-size: 1.875rem;
  font-weight: 500;

  border-radius: 1rem;
`;

export default MenuBox;
