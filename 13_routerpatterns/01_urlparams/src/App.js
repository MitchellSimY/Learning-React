import React from 'react';
import './App.css';
import Food from "./Food";
import Meal from "./Meal";
import FoodSearch from "./FoodSearch";

// importing router.
import { Route, Switch, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Switch>
        {/* Using one parameter. */}
        <Route exact path='/food/:name'
          render={routeProps => <Food {...routeProps} />} />

        {/* How to use multiple parameters. */}
        <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />

        {/* Home/Root route */}
        <Route exact path="/" render={(routeProps) => <FoodSearch {...routeProps} />} />


        {/* 404 page. */}
        <Route exact render={() => <h1>Error not found.</h1>} />
      </Switch>
    </div>
  );
}

export default App;
