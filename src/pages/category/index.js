import React from 'react';
import { useParams } from 'react-router-dom';
import { AdvertismentBanner, TopPosts } from '../../components';
import { HorizontalCard } from '../../components/horizontalCard';
import { useBlogsContext } from '../../context/blogscontext';

import './category.css';

export const Category = () => {
  let { category } = useParams();
  const { data, loading, error } = useBlogsContext();
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  const filteredData = data.filter(item => item.category === category);
  return (
    <div className='category'>
      <div className='middle-section'>
        <div className='left-container'>
          <div className='latest-article-category-title'>{category}</div>
          <div className='latest-article-category-1'>
            <HorizontalCard data={filteredData[0]} />
            <HorizontalCard data={filteredData[1]} />
            <HorizontalCard data={filteredData[2]} />
            <HorizontalCard data={filteredData[3]} />
            <HorizontalCard data={filteredData[4]} />
            <HorizontalCard data={filteredData[5]} />
          </div>
        </div>
        <div className='right-container'>
          <TopPosts data={data} />
          <AdvertismentBanner />
        </div>
      </div>
    </div>
  );
};
