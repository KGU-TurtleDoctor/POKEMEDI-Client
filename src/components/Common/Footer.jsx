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
  height: 13rem;

  background-color: #f2f4f6;

  text-align: center;
`;

const FooterSubText = styled.p`
  font-size: 1.1rem;
  color: #868b94;
`;

const FooterMainText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #868b94;

  margin-top: 1rem;

  line-height: 1.4rem;
`;
