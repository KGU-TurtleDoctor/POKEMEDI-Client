import React from 'react';
import styled from 'styled-components';
import ImgError from '../assets/img/img_error.png';
import Header from '../components/Common/Header';

function NotLogin() {
  const handleClickLoginButton = () => {
    window.location.href = `${
      import.meta.env.VITE_APP_BASE_URL
    }/oauth2/authorization/kakao`;
  };

  return (
    <NotLoginWrapper>
      <Header />
      <NotLoginBodyWrapper>
        <NotLoginBoxWrapper>
          <NotLoginImg src={ImgError} />
          <NotLoginText>로그인 후 이용해주세요.</NotLoginText>
          <LoginButton onClick={handleClickLoginButton}>로그인하기</LoginButton>
        </NotLoginBoxWrapper>
      </NotLoginBodyWrapper>
    </NotLoginWrapper>
  );
}

export default NotLogin;

const NotLoginWrapper = styled.div`
  width: 100%;
`;

const NotLoginBodyWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8rem);
  padding: 0 calc((100% - 81.2rem) / 2);
  margin-top: 8rem;

  background-color: #f1f5f9;

  display: flex;
  justify-content: center;
`;

const NotLoginBoxWrapper = styled.div`
  width: 81.2rem;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotLoginImg = styled.img`
  width: 50rem;
  margin-right: 2.5rem;
`;

const NotLoginText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  font-family: Pretendard;
`;

const LoginButton = styled.button`
  width: 20rem;
  height: 3.75rem;

  border-radius: 0.7rem;

  font-size: 1.75rem;
  font-weight: 500;
  font-family: Pretendard;

  background-color: #04293f;
  color: white;

  margin: 2rem 0 13rem;
`;
