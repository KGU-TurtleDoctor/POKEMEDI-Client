import React from 'react';
import styled from 'styled-components';
import Header from '../components/Common/Header';
import MenuIntroduction from '../components/Home/MenuIntroduction';
import ServiceIntroduction from '../components/Home/ServiceIntroduction';

function Home() {
  return (
    <HomePageWrapper>
      <Header />
      <HomePageBodyWrapper>
        <ServiceIntroduction />
        <MenuIntroduction />
      </HomePageBodyWrapper>
    </HomePageWrapper>
  );
}

export default Home;

const HomePageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const HomePageBodyWrapper = styled.div`
  margin-top: 11rem;
`;
