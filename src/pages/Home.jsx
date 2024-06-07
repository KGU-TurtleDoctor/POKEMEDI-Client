import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import MenuIntroduction from '../components/Home/MenuIntroduction';
import ServiceIntroduction from '../components/Home/ServiceIntroduction';
import { api } from '../libs/api';

function Home() {
  const [nickname, setNickname] = useState(null);

  useEffect(() => {
    api.get('/api/isLogin', { withCredentials: true }).then((res) => {
      console.log(res);
      if (res.data.result.loginStatus) {
        api.get('/api/info', { withCredentials: true }).then((res) => {
          sessionStorage.setItem('name', res.data.result.name);
          setNickname(res.data.result.name);
        });
      }
    });
  });

  return (
    <HomePageWrapper>
      <Header nickname={nickname} />
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
