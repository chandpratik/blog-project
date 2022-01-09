import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { MdOutlineWavingHand } from 'react-icons/md';
import './blog.css';
import { FooterCard } from '../../components/footerCard';
import { useBlogsContext } from '../../context/blogscontext';

export const Blog = () => {
  const { state } = useLocation();
  const { blogData, category } = state;
  const { data, loading, error } = useBlogsContext();

  return (
    <div>
      <div className='blog-header'>
        <div>Daily Bugle</div>
      </div>
      <div className='blog-container'>
        <div className='blog-title'>{blogData.title}</div>
        <div className='blog-author-card'>
          <div className='blog-author-card-left'>
            <img
              src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=80'
              alt=''
              srcset=''
            />
            <div>
              <div className='author-name'>{blogData.author_name}</div>
              <div className='blog-date'>
                {blogData.date_published} {blogData.min_read} min read
              </div>
            </div>
          </div>
          <div className='social-media-icons'>
            <AiFillFacebook className='icons' />
            <AiFillTwitterSquare className='icons' />
            <AiFillInstagram className='icons' />
            <AiFillYoutube className='icons' />
          </div>
        </div>
        <div>
          <img className='blog-image' src={blogData.img_url} alt='blog-image' />
        </div>
        <div className='blog-content'>{blogData.content}</div>
        <div className='blog-tags'>
          {blogData.tags.map(tag => (
            <div className='tag'>{tag}</div>
          ))}
        </div>
        <div className='claps'>
          <MdOutlineWavingHand className='icons' />
          <div className='claps-count'>{blogData.claps} claps</div>
        </div>
        <div>
          <div>
            <div className='blog-author-card-left'>
              <img
                src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=80'
                alt='author-image'
              />
              <div className='written-by'>
                <div className='written-by-title'>WRITTEN BY</div>
                <div className='written-by-author'>{blogData.author_name}</div>
                <div className='written-by-subtitle'>
                  {blogData.date_published} {blogData.min_read} min read
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div className='footer-card-container'>
          <FooterCard data={data} category={category} />
          <FooterCard data={data} category={category} />
          <FooterCard data={data} category={category} />
        </div>
      )}
      <div className='fixed-div'>
        <div className='share'>
          <MdOutlineWavingHand className='icons' />
          <div>{blogData.claps} claps</div>
        </div>
        <div className='share'>
          <AiOutlineShareAlt className='icons' />
          <div>Share this article</div>
        </div>
      </div>
    </div>
  );
};
