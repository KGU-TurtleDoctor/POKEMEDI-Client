import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcLogo } from '../../assets/svg/icon';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleClickLogoButton = () => {
    navigate('/');
  };

  const handleClickAIChatButton = () => {
    navigate('/aichat');
  };

  const handleClickListButton = () => {
    navigate('/community-list');
  };

  const handleClickMyPageButton = () => {
    navigate('/mypage');
  };

  const handleClickLoginButton = () => {
    window.location.href = `${
      import.meta.env.VITE_APP_BASE_URL
    }/oauth2/authorization/kakao`;
  };

  return (
    <HeaderWrapper>
      <HeaderBodyWrapper>
        <HeaderLeftButton onClick={handleClickLogoButton}>
          <IcLogo />
          <HeaderTitle>POKEMEDI</HeaderTitle>
        </HeaderLeftButton>
        <HeaderNavigator>
          <NavigatorList>
            <NavigatorItem
              onClick={handleClickAIChatButton}
              $isActive={currentPath.startsWith('/aichat')}
            >
              AI 진단
            </NavigatorItem>
            <NavigatorItem
              onClick={handleClickListButton}
              $isActive={currentPath.startsWith('/community')}
            >
              커뮤니티
            </NavigatorItem>
            <NavigatorItem
              onClick={handleClickMyPageButton}
              $isActive={currentPath === '/mypage'}
            >
              마이페이지
            </NavigatorItem>
          </NavigatorList>
        </HeaderNavigator>
        {sessionStorage.getItem('name') ? (
          <SuccessLoginText>{`${sessionStorage.getItem(
            'name',
          )}님, 안녕하세요`}</SuccessLoginText>
        ) : (
          <LoginButton onClick={handleClickLoginButton}>로그인</LoginButton>
        )}
      </HeaderBodyWrapper>
    </HeaderWrapper>
  );
}
export default Header;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 8rem;
  padding: 0 calc((100% - 126.2rem) / 2);

  border-bottom: 0.1rem solid rgb(211, 211, 211);

  background-color: white;
`;

const HeaderBodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 126.2rem;
  height: 100%;
`;

const HeaderTitle = styled.p`
  font-size: 2.75rem;
  font-weight: 700;
  font-family: Pretendard;
  padding-top: 0.35rem;
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
  padding: 0 3rem;

  font-size: 1.75rem;
  font-weight: 600;
  font-family: Pretendard;

  box-shadow: ${({ $isActive }) =>
    $isActive ? 'inset 0 -0.25rem 0 #04293f' : 'none'};
`;

const LoginButton = styled.button`
  width: 8.75rem;
  height: 3.75rem;
  margin-left: 9.5rem;

  border-radius: 0.7rem;

  font-size: 1.75rem;
  font-weight: 500;
  font-family: Pretendard;

  background-color: #04293f;
  color: white;
`;

const SuccessLoginText = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: Pretendard;
`;
