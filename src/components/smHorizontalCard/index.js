import React from 'react';
import './smHorizontalCard.css';

export const SmHorizontalCard = ({ data, rank }) => {
  console.log(data);
  return (
    <div className='sm-horizontal-card'>
      <div className='sm-horizontal-card-details'>
        <div className='sm-horizontal-card-img-container'>
          <img src={data.img_url} alt='top-post' />
        </div>
        <div className='sm-horizontal-card-content'>
          <div className='sm-horizontal-card-title'>{data.title}</div>
          <div className='sm-horizontal-card-subtitle'>
            <b>{data.category}</b> / {data.date_published}
          </div>
        </div>
      </div>
      <div className='rank'>{rank}</div>
    </div>
  );
};
