import React, { Component } from "react";


class DogDetails extends Component {
    
    render() {
        console.log(this.props.dog);
        return (
            <div>
                Dog Details component
                
            </div>
        )
    }
}

export default DogDetails;