import React, { Component } from "react";

class Dog extends Component {

    componentDidMount() {
        console.log("DOG MOUNTED");
    }


    componentWillUnmount() {
        console.log("Dog will unmount");
    }

    

    render() {
        console.log("Dog render!");
        return (
            <div>
                <h2>Test from Dog</h2>
                <p>This dog is named: {this.props.name}</p>
            </div>
        )
    }
}

export default Dog;