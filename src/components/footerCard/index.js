import React from 'react';
import './footerCard.css';

export const FooterCard = ({ data, category }) => {
  const categoryData = data.filter(blog => blog.category === category)[
    Math.floor(Math.random() * (9 - 0 + 1) + 0)
  ];

  return (
    <div className='footer-card'>
      <div>
        <img
          src={categoryData.img_url}
          className='footer-card-img'
          alt='realted-article'
        />
      </div>
      <div>
        <div className='footer-card-title'>{categoryData.title}</div>
        <div className='footer-author-card-left'>
          <img
            src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=60'
            alt='author'
          />
          <div className='footer-written-by'>
            <div className='footer-written-by-title'>WRITTEN BY</div>
            <div>{categoryData.author_name}</div>
            <div className='footer-written-by-subtitle'>
              {categoryData.date_published} {categoryData.min_read} min read
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
