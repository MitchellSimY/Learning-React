import React, { Component } from "react";

// Importing CSS.
import "./DogDetails.css";

class DogDetails extends Component {

    render() {
        console.table(this.props.dog);
        let dog = this.props.dog;
        return (
            <div>
                <div className="DogDetails">

                    <h1>{dog.name}</h1>
                    <img src={dog.src} alt={dog.name} />

                </div>



            </div>
        )
    }
}

export default DogDetails;