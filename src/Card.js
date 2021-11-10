import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Card({ movie }) {
  return (
    <div className="card">
      <div>
        <h1>{movie.name}</h1>
      </div>
      <div className="card_left">
        <img style={{ height: "300px" }} src={movie.image} alt="a" />
      </div>
      <div className="card_right__details">
        <ul>
          <li>{movie.date}</li>
          <li>||</li>
          <li>{movie.type}</li>
        </ul>
        <p>{movie.description}</p>
        <br />
        <button onClick={(e) => e.preventDefault()}>
          <Link to={`/profile/${movie.id}`}>go to trailer</Link>
        </button>
      </div>
    </div>
  );
}

export default Card;
