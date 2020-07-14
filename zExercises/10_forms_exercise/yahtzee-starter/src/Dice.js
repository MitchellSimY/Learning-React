import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
      // Fixed the toggle on dice issue. The Game.js->toggleLocked(idx) was
      // not being passed a parameter. 
        <Die handleClick={() => this.props.handleClick(idx)}
          val={d}
          locked={this.props.locked[idx]}
          idx={idx}
          key={idx} />
      )}
    </div>
  }
}

export default Dice;