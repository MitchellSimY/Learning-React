import React from 'react';
import './App.css';
import Dog from "./Dog";
import Contact from "./Contact";
import About from "./About";

// Importing route component
import {Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Route path="/dog" component={Dog} />
    </div>
  );
}

export default App;
