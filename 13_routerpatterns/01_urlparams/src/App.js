import React from 'react';
import './App.css';
import Food from "./Food";

// importing router.
import { Route, Switch, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">


      <Route exact path='/food/:name'
      render = {routeProps => <Food {...routeProps} />} />


    </div>
  );
}

export default App;
