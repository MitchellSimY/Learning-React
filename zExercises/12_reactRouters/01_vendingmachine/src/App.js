import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import other JS files.
import Chips from "./Chips"
import Drink from "./Drink"

// Remember to import route.
import { Route, Switch, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavLink exact activeClassName="active-link"
        to="/Chips">Chips</NavLink>
      <NavLink exact activeClassName="active-link"
        to="/Drink">Drink</NavLink>
      <NavLink exact activeClassName="active-link"
        to="/">Home</NavLink>



      {/* Switch Statements for routing. */}
      <Switch>
        <Route exact path="/Chips" component={Chips} />
        <Route exact path="/Drink" component={Drink} />
      </Switch>




    </div>
  );
}

export default App;
