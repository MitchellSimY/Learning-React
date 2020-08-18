import React, {Component} from 'react';
import './App.css';

// Importing components
import NavBar from "./NavBar";
import DogList from "./DogList";

// Importing Router.



class App extends Component {
  // Default props of dogs.
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        // src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        // src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        // src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render() {
    return (

      <div className="App">
        <NavBar />
        <DogList />
        
      </div>
    );
  }

}

export default App;
