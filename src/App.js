import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import update from 'immutability-helper';


class App extends Component {

  constructor() {
    super();

    this.state = {
      all_pokemon: [

      ],
      searchField: ''
    };
  }

  setAllPokemon = allPokes => {
    this.setState({all_pokemon: allPokes});
  }

  updateStateAttributes = (response, i) => {
    this.setState({
      all_pokemon: update(this.state.all_pokemon, 
        {[i]: {sprite: {$set: response.sprites.front_default } },
         [i]: {type1: {$set: response.types[0].type.name} } } )
    } )
    if (response.types[1]) {
      this.setState({
        all_pokemon: update(this.state.all_pokemon, 
          {[i]: {type2: {$set: response.types[1].type.name} } } )
      } )
    }
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render() {

    const { all_pokemon, searchField } = this.state;
    const filtered_pokemon = all_pokemon.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Pokedex</h1>
        <SearchBox placeholder="search monsters" 
        handleChange={this.handleChange} />
        <CardList 
        all_pokemon={this.state.all_pokemon} 
        monsters={filtered_pokemon} 
        setAllPokemon = {this.setAllPokemon}
        updateStateAttributes = {this.updateStateAttributes}
        />
      </div>
    );
  }
  
}

export default App;
