import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {

  constructor() {
    super();

    this.state = {
      all_pokemon: [

      ],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(pokemon => this.derp(pokemon));
    
  }

  derp = (poke_results) => {
    this.setState({all_pokemon: poke_results.results});
    this.state.all_pokemon.forEach(monster => console.log(monster));
    // this.state.all_pokemon.forEach(item => this.setProperties(item))
  }

  setProperties = (item) => {
    this.setId(item);
    this.setSprite(item);
  }

  setId = item => {
    let id = item.url.substring(34, item.url.lastIndexOf("/"))
    // console.log(id);
    item.id = id;
  }

  setSprite = item => {
    fetch(item.url)
    .then(response => response.json())
    .then(response => item.sprite = response.sprites.front_default)
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render() {

    // this.state.all_pokemon.forEach(item => console.log(item));

    this.state.all_pokemon.forEach(item => this.setProperties(item))

    const { all_pokemon, searchField } = this.state;
    const filtered_pokemon = all_pokemon.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Pokedex</h1>
        <SearchBox placeholder="search monsters" 
        handleChange={this.handleChange} />
        <CardList monsters={filtered_pokemon} />
      </div>
    );
  }
  
}

export default App;
