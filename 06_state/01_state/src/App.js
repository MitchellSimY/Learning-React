import React from 'react';
import './App.css';
import Game from "./Game";
import Rando from "./Rando";
import Button from "./Button";
import BrokenClick from "./BrokenClick";
import RandNumGame from "./RandNumGame";


function App() {
  return (
    <div className="App">
      {/* <Rando maxNum={7}/>
      <Button />
      <BrokenClick /> */}
      <RandNumGame />
    </div>
  );
}

export default App;
