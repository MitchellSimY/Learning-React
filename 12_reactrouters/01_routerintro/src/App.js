import React from 'react';
import './App.css';
import Dog from "./Dog";
import Contact from "./Contact";
import About from "./About";

// Importing route component
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch >
        <Route exact path="/" component={Contact} />
        <Route exact path="/dog" component={Dog} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
