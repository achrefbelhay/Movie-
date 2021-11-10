import React from "react";
import "./SearchMovie.css";

function SearchMovie({ setInput }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="SearchMovie"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default SearchMovie;
