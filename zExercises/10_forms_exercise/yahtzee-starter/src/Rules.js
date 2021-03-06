/** Rule for Yahtzee scoring.
 *
 * This is an "abstract class"; the real rules are subclasses of these.
 * This stores all parameters passed into it as properties on the instance
 * (to simplify child classes so they don't need constructors of their own).
 *
 * It contains useful functions for summing, counting values, and counting
 * frequencies of dice. These are used by subclassed rules.
 */

// Rules are completed.
class Rule {
  constructor(params) {

    // put all properties in params on instance
    Object.assign(this, params);
  }

  sum(dice) {
    // sum of all dice
    return dice.reduce((prev, curr) => prev + curr);
  }

  freq(dice) {
    // frequencies of dice values
    const freqs = new Map();
    for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1);
    return Array.from(freqs.values());
  }

  count(dice, val) {
    // # times val appears in dice
    return dice.filter(d => d === val).length;
  }
}

/** Given a sought-for val, return sum of dice of that val.
 *
 * Used for rules like "sum of all ones"
 */
class TotalOneNumber extends Rule {
  evalRoll = dice => {
    return this.val * this.count(dice, this.val);
  };
}

/** Given a required # of same dice, return sum of all dice.
 *
 * Used for rules like "sum of all dice when there is a 3-of-kind"
 */
class SumDistro extends Rule {
  evalRoll = dice => {
    // do any of the counts meet of exceed this distro?
    return this.freq(dice).some(c => c >= this.count) ? this.sum(dice) : 0;
  };
}

/** Check if full house (3-of-kind and 2-of-kind) */
class FullHouse extends Rule {
  evalRoll = dice => {
    // if ((this.freq(dice)[0] === 3 || this.freq(dice)[0] === 2) &&
    //   (this.freq(dice)[1] === 3 || this.freq(dice)[1] === 2)) {
    //   return 25;
    // } else {
    //   return 0;
    // }

    // Smarter way of doing it.
    // Here, there was a variable created call freq = this.freq(dice)
    let freqs = this.freq(dice)
    // if the lenght = 2, and includes a 3 and 2, pump the score. duh
    return freqs.length === 2 && freqs.includes(3) && freqs.includes(2) ?
      this.score : 0;
  }
}

/** Check for small straights. */
// Small straight needs 4 sequential dice. 
// 1234, 2345, 3456, 
class SmallStraight extends Rule {

  evalRoll = (dice) => {
    for (let die of dice) {
      if (dice.includes(die + 1) && dice.includes(die + 2) && dice.includes(die + 3)) {
        return this.score;
      }
    }
    return 0;
  }
}

/** Check for large straights. */
class LargeStraight extends Rule {
  evalRoll = dice => {
    const d = new Set(dice);

    // large straight must be 5 different dice & only one can be a 1 or a 6
    // I think what it meant to say was "And only one can be a 1 or 6. Cannot have both"
    return d.size === 5 && (!d.has(1) || !d.has(6)) ? this.score : 0;
  };
}

/** Check if all dice are same. */
class Yahtzee extends Rule {
  evalRoll = dice => {
    // all dice must be the same
    return this.freq(dice)[0] === 5 ? this.score : 0;
  };
}

// ones, twos, etc score as sum of that value
const ones = new TotalOneNumber({ val: 1, description: "The sum of all Ones" });
const twos = new TotalOneNumber({ val: 2, description: "The sum of all Twos" });
const threes = new TotalOneNumber({ val: 3, description: "The sum of all Threes" });
const fours = new TotalOneNumber({ val: 4, description: "The sum of all Fours" });
const fives = new TotalOneNumber({ val: 5, description: "The sum of all Fives" });
const sixes = new TotalOneNumber({ val: 6, description: "The sum of all Sixes" });

// three/four of kind score as sum of all dice
const threeOfKind = new SumDistro({ count: 3, description: "The sum of all dies if 3 dies match" });
const fourOfKind = new SumDistro({ count: 4, description: "The sum of all dies if 4 dies match" });

// full house scores as flat 25
const fullHouse = new FullHouse({ score: 25, description: "25 Points for 2 Matching dies and 3 Matching dies" });

// small/large straights score as 30/40
const smallStraight = new SmallStraight({ score: 30, description: "30 Points for 4 consecutive dies" });
const largeStraight = new LargeStraight({ score: 40, description: "40 Points for 5 consecutive dies" });

// yahtzee scores as 50
const yahtzee = new Yahtzee({ score: 50, description: "50 Points for 5 Matching dies" });

// for chance, can view as some of all dice, requiring at least 0 of a kind
const chance = new SumDistro({ count: 0, description: "The sum of all dies" });

export {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
};
