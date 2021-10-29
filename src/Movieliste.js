import React from "react";
import Card from "./Card";

function Movieliste({ movie, movieSearch }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {movie
        .filter((el) =>
          el.name.toLowerCase().includes(movieSearch.toLowerCase().trim())
        )
        .map((el, key) => (
          <Card key={el.key} el={el} />
        ))}
    </div>
  );
}

export default Movieliste;
