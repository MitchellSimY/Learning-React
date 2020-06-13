import React, { Component } from 'react';
import "./Die.css";

class Die extends Component {
    static defaultProps = {
        dies: [
            { id: 'one', tag: "{<i class='fas fa-dice-one'></i>}" },
            { id: 'two', tag: '<i class="fas fa-dice-two"></i>' },
            { id: 'three', tag: '<i class="fas fa-dice-three"></i>' },
            { id: 'four', tag: '<i class="fas fa-dice-four"></i>' },
            { id: 'five', tag: '<i class="fas fa-dice-five"></i>' },
            { id: 'six', tag: '<i class="fas fa-dice-six"></i>' },
        ]
    }


    render() {

        const diceRoll = this.props;
        console.log(diceRoll.die);
        const dies = this.props.dies;
        
        return (
            <div className="die-css">
                {<i class={`fas fa-dice-${dies[diceRoll.die - 1].id} fa-7x`}></i>}
            </div>
        )
    }
}

export default Die;