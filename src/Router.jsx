import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/Common/ScrollToTop';
import AIChat from './pages/AIChat';
import CommunityDetail from './pages/CommunityDetail';
import CommunityList from './pages/CommunityList';
import CommunityPost from './pages/CommunityPost';
import Home from './pages/Home';
import Loading from './pages/Loading';
import MyChatList from './pages/MyChatList';
import MyPage from './pages/MyPage';
import MyPostList from './pages/MyPostList';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aichat" element={<AIChat />} />
        <Route path="/aichat/:chatId" element={<AIChat />} />
        <Route path="/login-loading" element={<Loading />} />
        <Route path="/community-list" element={<CommunityList />} />
        <Route path="/community/post/:postId" element={<CommunityDetail />} />
        <Route path="/community-post" element={<CommunityPost />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypost-list" element={<MyPostList />} />
        <Route path="/mychat-list" element={<MyChatList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
