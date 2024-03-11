import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcLogo } from '../../assets/svg/icon';

function Header() {
  const navigate = useNavigate();

  const handleClickLogoButton = () => {
    navigate('/');
  };

  const handleClickAIChatButton = () => {
    navigate('/aichat');
  };

  return (
    <HeaderWrapper>
      <HeaderLeftButton onClick={handleClickLogoButton}>
        <IcLogo />
        <HeaderTitle>POKEMEDI</HeaderTitle>
      </HeaderLeftButton>
      <HeaderNavigator>
        <NavigatorList>
          <NavigatorItem onClick={handleClickAIChatButton}>
            AI 진단
          </NavigatorItem>
          <NavigatorItem>커뮤니티</NavigatorItem>
          <NavigatorItem>마이페이지</NavigatorItem>
        </NavigatorList>
      </HeaderNavigator>
      <LoginButton>로그인</LoginButton>
    </HeaderWrapper>
  );
}
export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 6.4rem;
  padding: 0 10rem;

  border-bottom: 0.1rem solid rgb(211, 211, 211);
`;

const HeaderTitle = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  padding-top: 0.3rem;
`;

const HeaderNavigator = styled.div`
  height: 100%;
`;

const HeaderLeftButton = styled.button`
  display: flex;
  align-items: center;
`;

const NavigatorList = styled.ul`
  display: flex;

  height: 100%;
`;

const NavigatorItem = styled.button`
  height: 100%;
  padding: 0 2.5rem;

  font-size: 1.4rem;
  font-weight: 600;

  &:hover {
    box-shadow: inset 0 -0.25rem 0 #04293f;
  }
`;

const LoginButton = styled.button`
  width: 7rem;
  height: 3rem;
  margin-left: 7.7rem;

  border-radius: 0.7rem;

  font-size: 1.4rem;
  font-weight: 500;

  background-color: #04293f;
  color: white;
`;
