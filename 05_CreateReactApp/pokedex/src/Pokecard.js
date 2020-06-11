import React from "react";
import Pokedex from "./Pokedex.js";

class Pokecard extends React.Component {

    render () {
        let poke = this.props;
        return (
            <div className="Pokecard-css">
                <h1>{poke.name}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} />
                <p>Type: {poke.type}</p>
                <p>EXP: {poke.exp}</p>
            </div> 
        )
    }
}

export default Pokecard;