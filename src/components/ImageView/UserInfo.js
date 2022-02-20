import React from 'react';

export const UserInfo = ({ image }) => (
  <div>
    {image.userImageURL && (
      <img className="user-image" src={image.userImageURL} alt={image.user} />
    )}
    <h4 className="credit">
      by&nbsp;
      <a
        className="profile-link"
        href={`http://pixabay.com/users/${image.user}-${image.user_id}`}
      >
        {image.user}
      </a>
    </h4>
  </div>
);
