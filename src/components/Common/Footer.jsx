import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <FooterSubText>이용약관 및 개인정보 취급방침</FooterSubText>
      <FooterMainText>Made by TurtleDoctor © 포켓메디 POKEMEDI</FooterMainText>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 16.25rem;

  background-color: #f2f4f6;

  text-align: center;
`;

const FooterSubText = styled.p`
  font-size: 1.37rem;
  font-family: Pretendard;
  color: #868b94;
`;

const FooterMainText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: Pretendard;
  color: #868b94;

  margin-top: 1.25rem;

  line-height: 1.75rem;
`;
