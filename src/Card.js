import React from "react";
import "./App.css";

function Card({ el, date, type, description }) {
  return (
    <div className="card">
      <div>
        <h1>{el.name}</h1>
      </div>
      <div className="card_left">
        <img style={{ height: "300px" }} src={el.image} alt="a" />
      </div>
      <div className="card_right__details">
        <ul>
          <li>{el.date}</li>
          <li>||</li>
          <li>{el.type}</li>
        </ul>
        <p>{el.description}</p>
      </div>
    </div>
  );
}

export default Card;
