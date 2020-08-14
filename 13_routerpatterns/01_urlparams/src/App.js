import React from 'react';
import './App.css';
import Food from "./Food";
import Meal from "./Meal";

// importing router.
import { Route, Switch, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">


      {/* Using one parameter. */}
      <Route exact path='/food/:name'
        render={routeProps => <Food {...routeProps} />} />

      {/* How to use multiple parameters. */}
      <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />

    </div>
  );
}

export default App;
