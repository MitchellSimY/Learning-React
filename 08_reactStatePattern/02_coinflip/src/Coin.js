import React, { Component } from 'react';


class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinState: "",
            headsCount: 0,
            tailsCount: 0,
            totalFlips: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.flipCoin();
    }

    flipCoin() {
        let rngCoin = Math.floor(Math.random() * 2) + 1;
        // Testing with console log.
        console.log(rngCoin);
        if (rngCoin === 1) {
            this.setState(currentState => ({
                coinState: "heads",
                headsCount: this.state.headsCount + 1,
                totalFlips: this.state.totalFlips + 1
            }))
        } else {
            this.setState(currentState => ({
                coinState: "tails",
                tailsCount: this.state.tailsCount + 1,
                totalFlips: this.state.totalFlips + 1
            }))
        }

    }

    render() {
        return (
            <div>
                <h1>{this.state.coinState === "heads" || this.state.coinState === "tails" ? this.state.coinState : ""}</h1>
                <button onClick={this.handleClick}>Flip Coin!</button>
                <p>Out of {this.state.totalFlips} flips, there has been {this.state.headsCount} heads and {this.state.tailsCount} tails.</p>
            </div>
        )
    }
}

export default Coin;