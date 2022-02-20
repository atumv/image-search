import React from 'react';
import { SearchForm } from './SearchForm/SearchForm';
import { ImageList } from './ImageList/ImageList';
import { Error } from './Error/Error';

export const Home = ({ getImages, images, loadMore, setImage, error }) => (
  <>
    <SearchForm getImages={getImages} />
    <ImageList images={images} loadMore={loadMore} setImage={setImage} />
    <Error error={error} />
  </>
);
