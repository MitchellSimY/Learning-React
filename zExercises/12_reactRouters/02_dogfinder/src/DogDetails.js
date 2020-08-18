import React, { Component } from "react";


class DogDetails extends Component {
    
    render() {
        console.table(this.props.dog);
        return (
            <div>
                Dog Details component
                <h1>{this.props.dog.name}</h1>
                
                
            </div>
        )
    }
}

export default DogDetails;