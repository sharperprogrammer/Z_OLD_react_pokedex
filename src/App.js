import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {

  constructor() {
    super();

    this.state = {
      all_pokemon: []
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(pokemon => this.setState({all_pokemon: pokemon.results}));
  }

  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
      </div>
    );
  }
  
}

export default App;
