import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ImgError from '../assets/img/img_error.png';
import Header from '../components/Common/Header';
import { api } from '../libs/api';

function Error() {
  const [nickname, setNickname] = useState();

  useEffect(() => {
    api.get('/api/isLogin').then(() => {
      api.get('/api/info', { withCredentials: true }).then((res) => {
        sessionStorage.setItem('name', res.data.result.name);
        setNickname(res.data.result.name);
      });
    });
  }, []);

  const navigate = useNavigate();

  const handleClickHomeButton = () => {
    navigate('/');
  };

  return (
    <ErrorWrapper>
      <Header nickname={nickname} />
      <ErrorBodyWrapper>
        <ErrorBoxWrapper>
          <ErrorImg src={ImgError} />
          <ErrorText>올바르지 않은 접근 경로입니다.</ErrorText>
          <HomeButton onClick={handleClickHomeButton}>홈 화면으로</HomeButton>
        </ErrorBoxWrapper>
      </ErrorBodyWrapper>
    </ErrorWrapper>
  );
}

export default Error;

const ErrorWrapper = styled.div`
  width: 100%;
`;

const ErrorBodyWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8rem);
  padding: 0 calc((100% - 81.2rem) / 2);
  margin-top: 8rem;

  background-color: #f1f5f9;

  display: flex;
  justify-content: center;
`;

const ErrorBoxWrapper = styled.div`
  width: 81.2rem;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorImg = styled.img`
  width: 50rem;
  margin-right: 2.5rem;
`;

const ErrorText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  font-family: Pretendard;
`;

const HomeButton = styled.button`
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
