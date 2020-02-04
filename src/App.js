import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import update from 'immutability-helper';
// import DropDown from './components/drop-down/drop-down.component';
import Select from 'react-select'


class App extends Component {

  constructor() {

    super();

    this.state = {
      all_pokemon: [

      ],
      searchField: '',
      searchType: 'Name'
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

  handleSearchChange = e => {
    this.setState({searchField: e.target.value});
  }

  handleDropDownChange = e => {
    if (e === null) {
      this.setState({searchType: ""});
    }
    else {
      this.setState({searchType: e.value});
    }
  }

  typeFilter = (monster, searchField) => {
    if (monster.type1 && monster.type1.toLowerCase().includes(searchField.toLowerCase()) ) {
      return true;
    }
    else if (monster.type2 && monster.type2.toLowerCase().includes(searchField.toLowerCase()) ) {
      return true;
    }
    else {
      return false;
    }
  }

  render() {

    const { all_pokemon, searchField, searchType } = this.state;
    let filtered_pokemon;
    if (searchType === "Name") {
      filtered_pokemon = all_pokemon.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    }
    else if (searchType === "Type") {
      filtered_pokemon = all_pokemon.filter(monster => 
        this.typeFilter(monster, searchField)
      );
    }
    else {
      filtered_pokemon = all_pokemon;
    }

    const options = [
      { value: 'Name', label: 'Name' },
      { value: 'Type', label: 'Type' },
    ]

    return (
      <div className="App">
        <h1>Pokedex</h1>

        {/* <div className="myDiv" style={{display: "flex"}}> */}
          <SearchBox placeholder="search monsters" 
          handleChange={this.handleSearchChange} />
          
          <Select 
          options={options} 
          defaultValue={options[0]}
          className="myDropdown" 
          placeholder="Search Type" 
          isClearable
          onChange={this.handleDropDownChange}
          />
        {/* </div> */}
        
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
