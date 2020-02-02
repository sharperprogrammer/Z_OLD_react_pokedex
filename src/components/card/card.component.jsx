import React from 'react'
import './card.styles.css'

export const Card = (props) => (

    <div className="card-container">
        {/* <img alt="monster" src={`${props.monster.sprite}`}></img> */}
        <img alt="monster" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.monster.id}.png`}></img>
        <h2> {props.monster.name} </h2>
    </div>
)