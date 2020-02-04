import React, {Component} from 'react'
import './card.styles.css'

class Card extends Component {

    
    render() {

        return <div className="card-container">
            <img className="image" alt="pokemon" src={this.props.image}></img>
            {/* <img alt="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.monster.id}.png`}></img> */}
            {/* <img className="image" alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${props.monster.name}.jpg`}></img> */}
            
            <h2> {this.props.monster.id} </h2>
            <h2 className="name"> {this.props.monster.name} </h2>
            
            { this.props.monster.type1 &&
                <p className="type"> Type 1: {this.props.monster.type1} </p>
            }
            { this.props.monster.type2 &&
                <p className="type"> Type 2: {this.props.monster.type2} </p>
            }
            
        </div>
    }
}

export default Card;