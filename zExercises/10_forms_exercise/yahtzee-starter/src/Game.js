import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

// Constant variables that define the game attributes like number of dies and available roles.
const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);

    // States that include the dice array, with length of NUM_DICE.
    // 'locked' which determines whether the die position is locked from toggles.
    // 'rollsLeft' which is given the number of rolls.
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,

      // scores is what appears to be an object.
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    // If statement that allows the button to be pressed
    // if the rollsLeft is greater than 0.
    // if (this.state.rollsLeft > 0) {
    this.setState(st => ({
      // Dice state.
      // If die is not locked at index, then assign random number from 1-6 
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      // if rollsleft = 0, every die is locked.
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      // subtracting one from rolls.
      rollsLeft: st.rollsLeft - 1
    }));
    // } else {
    //   return null;
    // }
  }
  // Function that does the score. 
  // It's given the rule name and the rule function.
  // The rulename is utilized to point the the state name.
  // the ruleFn is a function that provides value to the state variable.
  doScore(rulename, ruleFn) {
    if (this.state.scores[rulename] === undefined) {
      // evaluate this ruleFn with the dice and score this rulename
      this.setState(st => ({


        scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
        // rollsLeft resets after every score mark.
        rollsLeft: NUM_ROLLS,
        // No locked dies afterwards either.
        locked: Array(NUM_DICE).fill(false)
      }));
      this.roll();


    } else if (this.state.scores[rulename] !== undefined) {

      return null;
    }




  }

  // function that toggles lock for Die?
  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    console.log(idx)
    this.setState(st => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1)]
    }));
  }

  render() {
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>
          <section className='Game-dice-section'>

            {/* Dice component that then goes into the Die component.
          Dice component is given props of the dice state, whethere it's locked,
          and a handleClick. */}
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
            />

            {/* Rolling Dices button. */}
            <div className='Game-button-wrapper'>
              <button
                className='Game-reroll'
                disabled={this.state.locked.every(x => x) || this.state.rollsLeft === 0}
                onClick={this.roll}
              >
                {this.state.rollsLeft} Rerolls Left
              </button>
            </div>
          </section>
        </header>

        {/* Score table component. Reaches for function called doScore
        and has a state which signifies the score. */}
        <ScoreTable doScore={this.doScore} scores={this.state.scores} />
      </div>
    );
  }
}

export default Game;
