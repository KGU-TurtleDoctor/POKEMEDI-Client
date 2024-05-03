import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AIChat from './pages/AIChat';
import CommunityList from './pages/CommunityList';
import CommunityPost from './pages/CommunityPost';
import Home from './pages/Home';
import Loading from './pages/Loading';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aichat" element={<AIChat />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/community-list" element={<CommunityList />} />
        <Route path="/community-post" element={<CommunityPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
