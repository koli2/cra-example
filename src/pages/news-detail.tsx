import React from 'react';
import { useParams } from 'react-router-dom';
import { mockedNews } from '../mocked-news';

const NewsDetail: React.FC = () => {
  const { id } = useParams();
  const newsData = mockedNews.find((news) => news.id === Number(id));
  if (!newsData) {
    return <>No article found</>;
  }
  const { title, description } = newsData;
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};

export default NewsDetail;
