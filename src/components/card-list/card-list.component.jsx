import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.pokemon.map((pokemonItem) => (
        <Card key={pokemonItem.id} pokemon={pokemonItem} />
      ))}
    </div>
  );
};
