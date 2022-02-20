import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { API_KEY, API_URL } from './shared/constants/apiConstants';
import { fetchData } from './shared/utils/fetchData';

import { Home } from './components/Home/Home';
import { ImageView } from './components/ImageView/ImageView';

const App = () => {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [page, setPage] = useState(null);
  const [query, setQuery] = useState(null);
  const [error, setError] = useState(null);

  const getImages = async (event) => {
    event.preventDefault();
    setPage(1);
    const inputValue = event.target.elements.query.value;
    const query = inputValue.trim();

    if (!query) {
      setImages([]);
      setError(null);
    } else {
      try {
        const url = `${API_URL}&key=${API_KEY}&q=${query}&page=1`;
        const data = await fetchData(url);
        const results = data.total;
        const images = data.hits;

        if (!results) {
          setImages([]);
          setError('No images were found.');
        } else if (results) {
          setQuery(query);
          setImages(images);
          setError(null);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const loadMore = async () => {
    const url = `${API_URL}&key=${API_KEY}&q=${query}&page=${page + 1}`;
    const data = await fetchData(url);
    const newImages = data.hits;
    setImages([...images, ...newImages]);
    setPage(page + 1);
  };

  return (
    <>
      <Routes>
        <Route
          path="/image-search"
          element={
            <Home
              images={images}
              loadMore={loadMore}
              setImage={setImage}
              getImages={getImages}
              error={error}
            />
          }
        />
        <Route path="/image/:id" element={<ImageView image={image} />} />
      </Routes>
    </>
  );
};

export default App;
