import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {

  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>

              {/* - Component Breakdown -
              The component has a name, props of score and doScore.
              'Score' calls on the prop from Rules.js, which finds the
              appropriate function in Rules.js and performs it. 
              
              Within 'doScore', the event points to doScore the function in 
              Game.js and does the function there. It's given two parameters.
              The 'rulename' and ruleFn 
              
              'name'.evalRoll is a "function" of sorts that points
              to a class with a function.*/}
              <RuleRow name="Ones"
                description={ones.description}
                score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} />

              <RuleRow name="Twos"
                description={twos.description}
                score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow name="Threes"
                description={threes.description} score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow name="Fours"
                description={fours.description} score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow name="Fives"
                description={fives.description} score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow name="Sixes"
                description={sixes.description} score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              {/* Again, the doScore function goes into the Rules component
              then calls on the threeOfKind class, and then the evalRoll function. */}
              <RuleRow name="Three of Kind"
                description={threeOfKind.description}
                score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow name="Four of Kind"
                description={fourOfKind.description} score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />

              {/* FIXED */}
              <RuleRow name="Full House"
                description={fullHouse.description}
                score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />

              {/* FIX */}
              <RuleRow name="Small Straight"
                description={smallStraight.description} score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow name="Large Straight"
                description={largeStraight.description} score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow name="Yahtzee"
                description={yahtzee.description} score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow name="Chance"
                description={chance.description} score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default ScoreTable;