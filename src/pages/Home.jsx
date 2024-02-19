import React from 'react';
import styled from 'styled-components';
import Header from '../components/Common/Header';

function Home() {
  return (
    <HomePageWrapper>
      <Header />
    </HomePageWrapper>
  );
}

export default Home;

const HomePageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
