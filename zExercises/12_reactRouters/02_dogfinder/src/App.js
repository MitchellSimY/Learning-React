import React, { Component } from 'react';
import './App.css';

// Importing components
import NavBar from "./NavBar";
import DogList from "./DogList";
import DogDetails from './DogDetails';

// Importing Router.
import { Switch, Route } from "react-router-dom";

// Importing dog images. src: xxx
import whiskey from "./imgs/whiskey.jpg";
import tubby from "./imgs/tubby.jpg";
import hazel from "./imgs/hazel.jpg";



class App extends Component {
  // Default props of dogs.
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render() {

    // Get dog is given the props. 
    // This whole function prtty much says 
    // Aight bro, I'll check the passed prop information
    // then return a dog detail component.
    const getDog = props => {
      // params name is given from the props.
      let name = props.match.params.name;

      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      )
      return <DogDetails {...props} dog={currentDog}/>
    }

    return (

      <div className="App">
        <NavBar dogs={this.props.dogs} />

        <Switch>
          <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
          {/* render runs the function getDog */}
          <Route exact path="/dogs/:name" render={getDog} />
        </Switch>
      </div>
    );
  }

}

export default App;
