import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchString: "",
    };
  }

  componentDidMount() {
    for (let i = 0; i < 21; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((response) =>
        response.json().then((pokemon) =>
          this.setState({
            pokemon: [
              ...this.state.pokemon,
              {
                id: pokemon.id,
                name: pokemon.name,
                weight: pokemon.weight,
                height: pokemon.height,
                sprite: pokemon.sprites.front_default,
              },
            ],
          })
        )
      );
    }
  }

  render() {
    const regEx = new RegExp(`^${this.state.searchString}`, "i");
    const filteredPokemon = this.state.pokemon
      .filter((monster) => {
        return regEx.test(monster.name.toLowerCase());
      })
      .sort((a, b) => a.id - b.id);
    return (
      <div className="App">
        <h1>Pokemon Search</h1>
        <SearchBox
          handleChange={(e) => this.setState({ searchString: e.target.value })}
          placeholder="select monster..."
        />
        <CardList pokemon={filteredPokemon} />
      </div>
    );
  }
}

export default App;
