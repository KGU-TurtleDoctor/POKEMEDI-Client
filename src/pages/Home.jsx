import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Common/Footer';
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
      <Footer />
    </HomePageWrapper>
  );
}

export default Home;

const HomePageWrapper = styled.div`
  width: 100%;
`;

const HomePageBodyWrapper = styled.div`
  margin-top: 22.5rem;
`;
