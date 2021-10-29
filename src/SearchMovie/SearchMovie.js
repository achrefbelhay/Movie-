import React from "react";
import "./SearchMovie.css";

function SearchMovie({ setMovieSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="SearchMovie"
        onChange={(e) => setMovieSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchMovie;
