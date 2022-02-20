import React from 'react';

export const SearchForm = ({ getImages }) => (
  <form className="form" onSubmit={getImages}>
    <input
      className="form-input"
      type="text"
      name="query"
      placeholder="type here"
      autoFocus
    />
  </form>
);
