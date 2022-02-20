import React from 'react';
import { BackBtn } from './BackBtn';
import { ImagePreview } from './ImagePreview';
import { UserInfo } from './UserInfo';
import { DownloadBtn } from './DownloadBtn';

export const ImageView = ({ image }) => (
  <div className="image-view-container">
    <div className="image-view">
      <BackBtn />
      <ImagePreview image={image} />
      <UserInfo image={image} />
      <DownloadBtn image={image} />
    </div>
  </div>
);
