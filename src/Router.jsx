import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AIChat from './pages/AIChat';
import Home from './pages/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aichat" element={<AIChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
