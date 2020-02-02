import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
// import update from 'react-addons-update';
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

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(pokemon => this.derp(pokemon));
    
  }

  derp = (poke_results) => {
    let newList = [];
    poke_results.results.forEach(item => newList.push(this.setProperties(item)));
    this.setState({all_pokemon: newList});

    this.state.all_pokemon.forEach((item, i) => this.setSprite(item, i))
  }

  setProperties = (item) => {
    return {
      name: item.name, 
      url: item.url,
      id: this.setId(item),
      sprite: ''
    }
  }

  setId = item => {
    let id = item.url.substring(34, item.url.lastIndexOf("/"))
    return id;
  }

  setSprite = (item, i) => {
    fetch(item.url)
    .then(response => response.json())
    .then(response => this.updateStateAttributes(response, i) )
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
        <CardList monsters={filtered_pokemon} />
      </div>
    );
  }
  
}

export default App;
