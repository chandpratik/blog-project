import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Home } from './components';

import { Blog, Category } from './pages';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
            <Route path='blogs/:category' element={<Category />} />
          </Route>
          <Route path='/blog/:id' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
