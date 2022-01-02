import React from 'react';
import './App.css';
import { Home } from './components';

import { useBlogsContext } from './context/blogscontext';

function App() {
  const { data, loading, error } = useBlogsContext();
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
