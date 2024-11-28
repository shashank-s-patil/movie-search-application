import './MovieSearch.css';
import React from "react";


export const MovieSearch = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="movie-search mb-4">
      <input type="text" className="form-control" placeholder="Search movies..." onChange={handleInputChange}/>
    </div>
  );
};

