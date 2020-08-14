import React from 'react';
import './App.css';
import Food from "./Food";

// importing router.
import { Route, Switch, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <Food />
    </div>
  );
}

export default App;
