import React from 'react';
import { Link } from 'react-router-dom';

interface NewsProps {
  title: string;
  description: string;
  id: number;
}

const News: React.FC<NewsProps> = ({ title, description, id }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/news/${id}`}>Read more</Link>
    </>
  );
};

export default News;
