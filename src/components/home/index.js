import React, { useState } from 'react';
import { useBlogsContext } from '../../context/blogscontext';
import { AdvertismentBanner } from '../advertismentBanner';
import { Hero } from '../hero';
import { HorizontalCard } from '../horizontalCard';
import { TextCard } from '../textCard';
import { TopPosts } from '../topPosts';
import { VerticalCard } from '../verticalCard';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import './home.css';

export const Home = () => {
  const { data, loading, error } = useBlogsContext();
  const [viewMore, setViewMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

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
            {loadMore ? (
              <>
                <HorizontalCard data={data[4]} />
                <HorizontalCard data={data[5]} />
                <HorizontalCard data={data[6]} />
              </>
            ) : null}
            <div onClick={() => setLoadMore(prevState => !prevState)}>
              {loadMore ? (
                <span className='show-less'>
                  <AiOutlineArrowUp style={{ color: '#F39C9C' }} /> Show Less
                </span>
              ) : (
                <span className='view-more'>
                  <AiOutlineArrowDown style={{ color: '#F39C9C' }} /> Load More
                </span>
              )}
            </div>
          </div>
          <div className='latest-article-category-2'>
            <img src={data[12].img_url} alt='latest-article-category-2' />
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
          {viewMore ? (
            <>
              <TextCard data={data[20]} />
              <TextCard data={data[21]} />
              <TextCard data={data[22]} />
            </>
          ) : null}
        </div>
        <div onClick={() => setViewMore(prevState => !prevState)}>
          {viewMore ? (
            <span className='show-less'>
              <AiOutlineArrowUp style={{ color: '#F39C9C' }} /> Show Less
            </span>
          ) : (
            <span className='view-more'>
              <AiOutlineArrowDown style={{ color: '#F39C9C' }} /> View More
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
