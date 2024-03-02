import React, { useRef } from 'react';
import styled from 'styled-components';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import MenuIntroduction from '../components/Home/MenuIntroduction';
import ServiceIntroduction from '../components/Home/ServiceIntroduction';

function Home() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

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
  position: relative;

  width: 100%;
`;

const HomePageBodyWrapper = styled.div`
  margin-top: 11rem;
`;
