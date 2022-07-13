import React from 'react';
import { mockedNews } from '../mocked-news';
import NewsItem from '../components/newsItem';

const News: React.FC = () => {
  return (
    <>
      {mockedNews.map((news) => {
        return <NewsItem key={news.id} {...news} />;
      })}
    </>
  );
};

export default News;
