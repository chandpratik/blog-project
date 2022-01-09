import React, { useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import './slider.css';

export const Slider = ({ sliderData }) => {
  const [current, setCurrent] = useState(0);
  const handleClick = idx => {
    setCurrent(idx);
  };

  return (
    <div className='slider'>
      <div className='slider-dots'>
        {sliderData.map((_, idx) => (
          <GoPrimitiveDot onClick={() => handleClick(idx)} />
        ))}
      </div>
      {sliderData.map((data, idx) => (
        <div className={idx === current ? 'slide active' : 'slide'}>
          {current === idx && (
            <>
              <img src={data.img_url} alt='slide-image' className='slide-img' />
              <p className='slider-title'>{data.title}</p>
              <p className='slider-subtitle'>
                <b>{data.category}</b> / {data.date_published}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
