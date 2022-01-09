import React from 'react';
import { Slider } from '../slider';
import './Hero.css';

export const Hero = ({ data }) => {
  const sliderData = [data[0], data[11], data[22], data[32]];
  return (
    <>
      <div className='featured-articles-grid'>
        <div className='featured-article-1'>
          <img
            src={data[0].img_url}
            alt='featured-image'
            className='featured-article-img'
          />
          <div className='featured-article-1-title'>{data[0].title}</div>
          <div className='featured-article-1-subtitle'>
            {data[0].category} / {data[0].date_published}
          </div>
        </div>
        <div className='featured-article-2'>
          <img
            src={data[11].img_url}
            alt='featured-image'
            className='featured-article-img'
          />
          <div className='featured-article-2-title'>{data[11].title}</div>
          <div className='featured-article-2-subtitle'>
            {data[11].category} / {data[11].date_published}
          </div>
        </div>
        <div className='featured-article-3'>
          <img
            src={data[21].img_url}
            alt='featured-image'
            className='featured-article-img'
          />
          <div className='featured-article-3-title'>{data[22].title}</div>
          <div className='featured-article-3-subtitle'>
            {data[22].category} / {data[22].date_published}
          </div>
        </div>
      </div>
      <Slider sliderData={sliderData} />
    </>
  );
};
