import React, { Component } from "react";
import "./DogList.css";
import DogDetails from "./DogDetails";

// Importing Routes.
import { Switch, Route, NavLink } from "react-router-dom";

class DogList extends Component {
    render() {
        return (
            <div className="DogList">
                <h1 className="display-1 text-center">Dog list!</h1>
                <div className="container">
                    <div className="row">
                        {this.props.dogs.map(d => (
                            <div className="Dog col-4 text-center" key={d.name}>
                                
                                <NavLink exact to={`/dogs/${d.name}`} render={() => <DogDetails dog={d} />}> <img src={d.src} alt={d.name}></img>
                                    <h3>{d.name}</h3>
                                </NavLink>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        )
    }
}

export default DogList;