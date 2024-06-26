import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { api } from '../libs/api';

function LoginLoading() {
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/api/info', { withCredentials: true }).then((data) => {
      sessionStorage.setItem('name', data.data.result.name);
      navigate('/');
    });
  }, []);

  return <LoadingWrapper></LoadingWrapper>;
}

export default LoginLoading;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  font-size: 3rem;
`;
