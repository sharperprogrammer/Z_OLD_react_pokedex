import React from 'react'
import './card.styles.css'

export const Card = (props) => (

    <div className="card-container">
        {/* <img alt="monster" src={`${props.monster.sprite}`}></img> */}
        <img alt="monster" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.monster.id}.png`}></img>
        <h2 className="name"> {props.monster.name} </h2>
        
        { props.monster.type1 &&
            <p className="type"> Type 1: {props.monster.type1} </p>
        }
        { props.monster.type2 &&
            <p className="type"> Type 2: {props.monster.type2} </p>
        }
        
    </div>
)