import React, { Component } from "react";

class RandNumGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rng: Math.floor(Math.random() * 10)
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        console.log("click");
        let rand = Math.floor(Math.random() * 10);
        this.setState({ rng: rand });
    }


    render() {
        return (
            <div>
                <h1>{this.state.rng}</h1>
                <h2>Number is: {this.state.rng === 7  || this.state.rng === 3 ? "You win!" : this.state.rng}</h2>
                <button onClick={this.handleClick}>Click to change number!</button>
            </div>
        )
    }
}

export default RandNumGame;