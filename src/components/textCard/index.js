import React from 'react';
import './textCard.css';

export const TextCard = ({ data }) => {
  return (
    <div className='text-card'>
      <div className='text-card-title'>{data.title}</div>
      <div className='text-card-content'>{data.content.slice(0, 270)}</div>
      <div className='text-card-subtitle'>
        <b>{data.category}</b> / {data.date_published}
      </div>
    </div>
  );
};
