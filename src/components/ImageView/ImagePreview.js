import React from 'react';

export const ImagePreview = ({ image }) => (
  <img className="img-preview" src={image.webformatURL} alt={image.tags} />
);
