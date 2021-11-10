import React, { useState } from "react";

import AddMovie from "./AddMovie/AddMovie";
import SearchMovie from "./SearchMovie/SearchMovie";

import Movieliste from "./Movieliste";

function Home({ movie, setMovie, setMovieSearch, movieSearch }) {
  const [input, setInput] = useState("");
  const addMovie = (e, newMovie) => {
    e.preventDefault();
    setMovie([...movie, newMovie]);
  };
  return (
    <div>
      <AddMovie addMovie={addMovie} />
      <SearchMovie
        input={input}
        setInput={setInput}
        setMovieSearch={setMovieSearch}
        movieSearch={movieSearch}
      />
      <Movieliste movie={movie} input={input} />
    </div>
  );
}

export default Home;
