import React from 'react';
import { SmHorizontalCard } from '../smHorizontalCard';
import './topPost.css';

export const TopPosts = ({ data }) => {
  return (
    <div>
      <div className='top-posts-title'>Top Posts</div>
      <div className='large-thumbnail'>
        <div className='large-thumbnail-img-container'>
          <img src={data[32].img_url} alt='large-thumbnail' />
        </div>
        <div className='large-thumbnail-content'>
          <div className='large-thumbnail-text-content'>
            <div className='large-thumbnail-title'>{data[32].title}</div>
            <div className='large-thumbnail-subtitle'>
              <b>{data[32].category}</b> / {data[32].date_published}
            </div>
          </div>
          <div className='large-thumbnail-rank'>1</div>
        </div>
      </div>
      <SmHorizontalCard data={data[20]} rank={2} />
      <SmHorizontalCard data={data[13]} rank={3} />
      <SmHorizontalCard data={data[40]} rank={4} />
    </div>
  );
};
