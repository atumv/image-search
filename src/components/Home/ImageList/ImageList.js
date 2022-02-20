import React from 'react';
import { Link } from 'react-router-dom';
import { InfiniteScrolling } from './InfiniteScrolling';

export const ImageList = ({ images, loadMore, setImage }) => (
  <InfiniteScrolling loadMore={loadMore}>
    <div className="image-list">
      {images.map((image) => (
        <div className="image-container" key={image.id}>
          <Link to={`/image/${image.id}`} onClick={() => setImage(image)}>
            <img
              className="img-thumb"
              src={image.previewURL}
              alt={image.tags}
            />
          </Link>
        </div>
      ))}
    </div>
  </InfiniteScrolling>
);
