import React, { Component } from "react";

// Importing CSS.
import "./DogDetails.css";

// importing routes.
import {Link} from "react-router-dom"

class DogDetails extends Component {

    render() {
        console.table(this.props.dog);
        let dog = this.props.dog;
        return (
            <div>
                <div className="DogDetails">


                    <img src={dog.src} alt={dog.name} />
                    <h1>{dog.name}</h1>
                    <p>{dog.age} years old</p>
                    {dog.facts.map(fact => (
                        <p>{fact}</p>
                    ))}

                        <Link to="/dogs">Go Back</Link>
                </div>



            </div>
        )
    }
}

export default DogDetails;