import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/Common/ScrollToTop';
import AIChat from './pages/AIChat';
import CommunityDetail from './pages/CommunityDetail';
import CommunityEdit from './pages/CommunityEdit';
import CommunityList from './pages/CommunityList';
import CommunityPost from './pages/CommunityPost';
import Error from './pages/Error';
import Home from './pages/Home';
import Loading from './pages/Loading';
import LoginLoading from './pages/LoginLoading';
import MyChatList from './pages/MyChatList';
import MyPostList from './pages/MyPostList';
import MyPage from './pages/Mypage';
import NotLogin from './pages/NotLogin';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aichat" element={<AIChat />} />
        <Route path="/login-loading" element={<LoginLoading />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/aichat/:chatId" element={<AIChat />} />
        <Route path="/login-loading" element={<Loading />} />
        <Route path="/community-list" element={<CommunityList />} />
        <Route path="/community/post/:postId" element={<CommunityDetail />} />
        <Route path="/community-post" element={<CommunityPost />} />
        <Route path="/community/edit/:postId" element={<CommunityEdit />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypost-list" element={<MyPostList />} />
        <Route path="/mychat-list" element={<MyChatList />} />
        <Route path="/login-error" element={<NotLogin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
