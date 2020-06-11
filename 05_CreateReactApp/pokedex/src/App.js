import React from 'react';
import './App.css';
import Pokedex from "./Pokedex.js";
import Pokecard from "./Pokecard.js";
import './Pokecard.css';

function App() {
  return (
    <div className="App">
      <h1>Pokemon!</h1>
      <Pokedex />
      
    </div>
  );
}

export default App;
