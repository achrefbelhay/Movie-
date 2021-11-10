import React from "react";
import Card from "./Card";

function Movieliste({ movie, movieSearch, input }) {
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
          el.name.toUpperCase().includes(input.toUpperCase().trim())
        )
        .map((el, key) => (
          <Card key={el.key} movie={el} />
        ))}
    </div>
  );
}

export default Movieliste;
