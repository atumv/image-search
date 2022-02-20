import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <button className="back-btn" onClick={() => navigate(-1)}>
      <svg
        className="back-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path d="M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z" />
      </svg>
    </button>
  );
};
