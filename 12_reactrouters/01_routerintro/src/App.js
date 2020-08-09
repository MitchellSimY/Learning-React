import React from 'react';
import './App.css';
import Dog from "./Dog";
import Contact from "./Contact";
import About from "./About";

// Importing route component
import { Route, Switch, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
{/*       This is not what we want to do.
      <a href="/dog">Dog</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a> */}

      <Link to="/about">About</Link>
      <Link to="/dog">Dog</Link>
      <Link to="/contact">Contact</Link>

      <Switch >
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/dog" component={Dog} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
