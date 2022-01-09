import React from 'react';
import { useNavigate } from 'react-router-dom';
import './verticalCard.css';

export const VerticalCard = ({ data }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${data.id}`, {
      state: { blogData: data, category: data.category },
    });
  };
  return (
    <div className='vertical-card' onClick={handleClick}>
      <div className='vertical-card-image-container'>
        <img
          src={data.img_url}
          alt='vertical-card'
          className='vertical-card-image'
        />
      </div>
      <div className='vertical-card-title'>{data.title}</div>
      <div className='vertical-card-content'>{data.content.slice(0, 130)}</div>
      <div className='vertical-card-subtitle'>
        <b>{data.category}</b> / {data.date_published}
      </div>
    </div>
  );
};
