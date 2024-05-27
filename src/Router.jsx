import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AIChat from './pages/AIChat';
import CommunityDetail from './pages/CommunityDetail';
import CommunityList from './pages/CommunityList';
import CommunityPost from './pages/CommunityPost';
import MyPostList from './pages/MyPostList';
import MyChatList from './pages/MyChatList';
import Home from './pages/Home';
import LoginLoading from './pages/LoginLoading';
import Loading from './pages/Loading';
import LoginWarning from './pages/LoginWarning';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aichat" element={<AIChat />} />
        <Route path="/login-loading" element={<LoginLoading />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/login-warning" element={<LoginWarning />} />
        <Route path="/community-list" element={<CommunityList />} />
        <Route path="/community/post/:postId" element={<CommunityDetail />} />
        <Route path="/community-post" element={<CommunityPost />} />
        <Route path="/mypost-list" element={<MyPostList />} />
        <Route path="/mychat-list" element={<MyChatList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
