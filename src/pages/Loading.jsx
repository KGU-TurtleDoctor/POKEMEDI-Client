import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { api } from '../libs/api';

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/api/info').then((data) => {
      console.log(data);
      navigate('/');
    });
  });

  return <LoadingWrapper></LoadingWrapper>;
}

export default Loading;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  font-size: 3rem;
`;
