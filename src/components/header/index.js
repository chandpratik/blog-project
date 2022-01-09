import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './header.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className='header'>
        <h1 className='blog-name'> Daily Bugle</h1>
        <div className='nav-bar'>
          <ul className='nav-links-container'>
            <Link to='/'>
              <li className='nav-link'>Home</li>
            </Link>
            <Link to='blogs/Bollywood'>
              <li className='nav-link'>Bollywood</li>
            </Link>
            <Link to='blogs/Hollywood'>
              <li className='nav-link'>Hollywood</li>
            </Link>
            <Link to='blogs/Technology'>
              <li className='nav-link'>Technology</li>
            </Link>
            <Link to='blogs/Fitness'>
              <li className='nav-link'>Fitness</li>
            </Link>
            <Link to='blogs/Food'>
              <li className='nav-link'>Food</li>
            </Link>
          </ul>
        </div>
        <div
          className='mobile-nav'
          onClick={() => setVisible(prevState => !prevState)}
        >
          <GiHamburgerMenu />
        </div>
      </div>
      <div>
        <ul
          className={`mobile-nav-links-container ${visible ? 'visible' : ''}`}
        >
          <Link to='/' onClick={() => setVisible(false)}>
            <li className='nav-link'>Home</li>
          </Link>
          <Link to='blogs/Bollywood' onClick={() => setVisible(false)}>
            <li className='nav-link'>Bollywood</li>
          </Link>
          <Link to='blogs/Hollywood' onClick={() => setVisible(false)}>
            <li className='nav-link'>Hollywood</li>
          </Link>
          <Link to='blogs/Technology' onClick={() => setVisible(false)}>
            <li className='nav-link'>Technology</li>
          </Link>
          <Link to='blogs/Fitness' onClick={() => setVisible(false)}>
            <li className='nav-link'>Fitness</li>
          </Link>
          <Link to='blogs/Food' onClick={() => setVisible(false)}>
            <li className='nav-link'>Food</li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
