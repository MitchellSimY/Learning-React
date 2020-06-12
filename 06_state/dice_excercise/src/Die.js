import React, { Component } from 'react';

class Die extends Component {
    render() {
        const diceRoll = this.props;
        return (
            <div>
                <p>{diceRoll.die1} || {diceRoll.die2}</p>
            </div>
        )
    }
}

export default Die;