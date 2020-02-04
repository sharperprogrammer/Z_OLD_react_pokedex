import React, {Component} from 'react'
import './card-list.styles.css'
import Card from '../card/card.component';


class CardList extends Component {

    // import an entire folder of images into an array
    // https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
    importAll = (r) => {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }


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

      const images = this.importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
      
      

      return <div className="card-list">
          {this.props.monsters && this.props.monsters.map(monster => (
              <Card key={monster.id} monster={monster} image={images[`${monster.name}.jpg`]} />
          ) ) }
      </div>
    };
}

export default CardList;