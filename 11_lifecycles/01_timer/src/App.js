import React from 'react';
import './App.css';
import Timer from './Timer';
import ZenQuote from "./ZenQuote";
import GithubUserInfo from "./GithubUserInfo"

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      {/* <ZenQuote /> */}
      <GithubUserInfo username='colt' />
      <GithubUserInfo username='mitchellsimy' />
    </div>
  );
}

export default App;
