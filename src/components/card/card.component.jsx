import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.pokemon.sprite} alt="monster" />
      <h1>{props.pokemon.name}</h1>
      <p>{props.pokemon.weight}</p>
      <p>{props.pokemon.height}</p>
    </div>
  );
};
