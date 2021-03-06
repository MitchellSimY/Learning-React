import React, { Component } from "react";
import Die from "./Die.js";
import './RollDice.css';

class RollDice extends Component {
    // Constructor.
    constructor(props) {
        super(props);
        this.state = {
            // States variables.
            die1: Math.floor(Math.random() * 6) + 1,
            die2: Math.floor(Math.random() * 6) + 1,
        }
        // Still don't know why we need this. But we just do.
        this.rngDiceOnClick = this.rngDiceOnClick.bind(this);
    }

    // Function to randomize the dices and onClick.
    rngDiceOnClick() {
        // RNG two numbers.
        let rngNumber = Math.floor(Math.random() * 6) + 1;
        let rngNumber2 = Math.floor(Math.random() * 6) + 1;

        // Setting the states.
        this.setState({
            die1: rngNumber,
            die2: rngNumber2
        })
    }

    render() {
        return (
            <div>
                <h1>Dice Roller!</h1>
                <div className="die-style">
                    <Die die={this.state.die1} className="Die-Component-CSS" /> 
                    <Die die={this.state.die2} className="Die-Component-CSS" />
                </div>
                <button onClick={this.rngDiceOnClick}>Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;
