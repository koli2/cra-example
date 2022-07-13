import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import News from './pages/news';
import NewsDetail from './pages/news-detail';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
