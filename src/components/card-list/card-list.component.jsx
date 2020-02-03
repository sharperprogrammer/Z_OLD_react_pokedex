import React, {Component} from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.component';


class CardList extends Component {

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(pokemon => this.setProperties(pokemon));
        
      }
    
      setProperties = (poke_results) => {
        let newList = [];
        poke_results.results.forEach(item => newList.push(this.itemProperties(item)));

        this.props.setAllPokemon(newList);    
        this.props.all_pokemon.forEach((item, i) => this.setSprite(item, i))
      }
    
      itemProperties = (item) => {
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
        .then(response => this.props.updateStateAttributes(response, i) )
      }

    render() {
      
        return <div className="card-list">
            {this.props.monsters && this.props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    };
}

export default CardList;