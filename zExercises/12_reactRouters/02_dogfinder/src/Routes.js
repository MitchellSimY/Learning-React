import React, {Component} from "react";
import DogList from "./DogList";
import DogDetails from './DogDetails';
import { Redirect } from "react-router-dom";

// Importing Router.
import { Switch, Route } from "react-router-dom";

class Routes extends Component {
    
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
            return <DogDetails {...props} dog={currentDog} />
        }
        return (

            <Switch>
                <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
                {/* render runs the function getDog */}
                <Route exact path="/dogs/:name" render={getDog} />
                <Redirect to="/dogs" />
            </Switch>
        )
    }
}

export default Routes;