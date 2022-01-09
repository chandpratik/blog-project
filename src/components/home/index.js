import React from 'react';
import { useBlogsContext } from '../../context/blogscontext';
import { AdvertismentBanner } from '../advertismentBanner';
import { Hero } from '../hero';
import { HorizontalCard } from '../horizontalCard';
import { TextCard } from '../textCard';
import { TopPosts } from '../topPosts';
import { VerticalCard } from '../verticalCard';
import './home.css';

export const Home = () => {
  const { data, loading, error } = useBlogsContext();

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return (
    <div className='home-container'>
      <Hero data={data} />
      <div className='latest-articles-container'>
        <div className='latest-articles-section-title'>The Latest</div>
        <div className='latest-articles-card-container'>
          <VerticalCard data={data[0]} />
          <VerticalCard data={data[11]} />
          <VerticalCard data={data[22]} />
        </div>
      </div>

      <div className='latest-articles-category-1-title'>Latest Articles</div>
      <div className='middle-section'>
        <div className='left-container'>
          <div className='latest-article-category-1'>
            <HorizontalCard data={data[0]} />
            <HorizontalCard data={data[1]} />
            <HorizontalCard data={data[2]} />
            <HorizontalCard data={data[3]} />
          </div>
          <div className='latest-article-category-2'>
            <img src={data[12].img_url} alt='latest-article-category-2-img' />
            <p className='latest-article-category-2-title'>{data[12].title}</p>
            <p className='latest-article-category-2-subtitle'>
              <b>{data[12].category}</b> / {data[12].date_published}
            </p>
          </div>
        </div>
        <div className='right-container'>
          <AdvertismentBanner />
          <TopPosts data={data} />
        </div>
      </div>
      <div className='lower-section'>
        <div className='latest-articles-category-3-title'>Latest Stories</div>
        <div className='latest-articles-category-3'>
          <TextCard data={data[20]} />
          <TextCard data={data[21]} />
          <TextCard data={data[22]} />
        </div>
      </div>
    </div>
  );
};
