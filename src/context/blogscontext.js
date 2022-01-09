import { createContext, useContext, useState, useEffect } from 'react';

const BlogsContext = createContext();

export function BlogsContextProvider({ children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
        setLoading(false);
      })
      .catch(err => setError(err));
  };
  useEffect(() => {
    getData();
  }, []);

  const value = { data, loading, error };
  return (
    <BlogsContext.Provider value={value}>{children}</BlogsContext.Provider>
  );
}

export function useBlogsContext() {
  return useContext(BlogsContext);
}
