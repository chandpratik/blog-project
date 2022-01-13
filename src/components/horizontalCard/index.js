import React from 'react';
import { useNavigate } from 'react-router-dom';
import './horizontalCard.css';

export const HorizontalCard = ({ data }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${data.id}`, {
      state: { blogData: data, category: data.category },
    });
  };
  return (
    <div className='horizontal-card' onClick={handleClick}>
      <div className='horizontal-card-img-container'>
        <img
          src={data.img_url}
          alt='horizontal-card'
          className='horizontal-card-image'
        />
      </div>
      <div className='horizontal-card-right'>
        <div className='horizontal-card-title'>{data.title}</div>
        <div className='horizontal-card-content'>
          {data.content.substring(0, 200) + '...'}
        </div>
        <div className='horizontal-card-subtitle'>
          <b>{data.category}</b> / {data.date_published}
        </div>
      </div>
    </div>
  );
};
