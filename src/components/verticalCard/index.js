import React from 'react';
import './verticalCard.css';

export const VerticalCard = ({ data }) => {
  return (
    <div className='vertical-card'>
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
