import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BlogsContextProvider } from './context/blogscontext';

ReactDOM.render(
  <React.StrictMode>
    <BlogsContextProvider>
      <App />
    </BlogsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
