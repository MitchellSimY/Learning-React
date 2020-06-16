import React from 'react';
import './App.css';
import Ball from "./Ball.js";
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Daily" maxNum={10} maxBalls={3}/>
    </div>
  );
}

export default App;
