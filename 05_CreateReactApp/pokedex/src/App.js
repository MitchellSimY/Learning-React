import React from 'react';
import './App.css';
import Pokedex from "./Pokedex.js";
import Pokecard from "./Pokecard.js";

function App() {
  return (
    <div className="App">
      <h1>Pokemon!</h1>
      <Pokedex />
      <Pokecard name = "Charmander"
        type= "Fire"
        id = "4"
        exp ="62"
      />
    </div>
  );
}

export default App;
