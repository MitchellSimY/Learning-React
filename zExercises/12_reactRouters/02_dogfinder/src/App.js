import React from 'react';
import './App.css';

// Importing components
import NavBar from "./NavBar";
import DogList from "./DogList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <DogList />
      <h1 className="display-1">test</h1>
    </div>
  );
}

export default App;
