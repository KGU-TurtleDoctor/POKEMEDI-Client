import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Common/Header';
import styled from 'styled-components';

function LoginWarning() {
  const navigate = useNavigate();

  const handleClickLoginMoveLogin = () => {
    window.location.href = `${
      import.meta.env.VITE_APP_BASE_URL
    }/oauth2/authorization/kakao`;
  };

  return (
    <LoginWarningWrapper>
      <Header />
      <LoginWarningBodyWrapper>
        <LoginWarningBoxWrapper>
          <LoginPlease>로그인 후 이용해주세요!</LoginPlease>
          <MoveLogin onClick={handleClickLoginMoveLogin}>
            로그인으로 이동
          </MoveLogin>
        </LoginWarningBoxWrapper>
      </LoginWarningBodyWrapper>
    </LoginWarningWrapper>
  );
}

export default LoginWarning;

const LoginWarningWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const LoginWarningBodyWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8rem);
  padding: 0 calc((100% - 81.2rem) / 2);
  margin-top: 8rem;

  background-color: #f1f5f9;

  display: flex;
  justify-content: center;
`;

const LoginWarningBoxWrapper = styled.div`
  width: 81.2rem;
  min-height: calc(100vh - 8rem);
  padding: 10rem;

  background-color: white;
  font-size: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`;

const LoginPlease = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-bottom: 2rem;

  font-size: 3rem;
  font-weight: 600;
`;

const MoveLogin = styled.button`
  width: 20rem;
  height: 3.75rem;

  border-radius: 0.7rem;

  font-size: 1.75rem;
  font-weight: 500;

  background-color: #04293f;
  color: white;
`;
