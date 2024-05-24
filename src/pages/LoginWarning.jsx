import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function LoginWarning() {
  const navigate = useNavigate();

  const handleClickLoginMoveLogin = () => {
    navigate('/login');
  };
  return (
    <LoginWarningWrapper>
      <LoginPlease>로그인 후 이용해주세요!</LoginPlease>
      <MoveLogin onClick={handleClickLoginMoveLogin}>로그인으로 이동</MoveLogin>
    </LoginWarningWrapper>
  );
}

export default LoginWarning;

const LoginWarningWrapper = styled.div`
  width: 100%;
  height: 100vh;

  font-size: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginPlease = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-bottom: 2rem;
`;

const MoveLogin = styled.button`
  width: 20rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  border-radius: 0.7rem;

  padding: 1rem;

  font-size: 1.75rem;
  font-weight: 500;
`;
