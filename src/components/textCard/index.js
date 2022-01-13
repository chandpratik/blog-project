import React from 'react';
import { useNavigate } from 'react-router-dom';
import './textCard.css';

export const TextCard = ({ data }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${data.id}`, {
      state: { blogData: data, category: data.category },
    });
  };
  return (
    <div className='text-card' onClick={handleClick}>
      <div className='text-card-title'>{data.title}</div>
      <div className='text-card-content'>
        {data.content.substring(0, 300) + '...'}
      </div>
      <div className='text-card-subtitle'>
        <b>{data.category}</b> / {data.date_published}
      </div>
    </div>
  );
};
