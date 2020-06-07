import FruitsArray from "./foods.js";

// assigning the length to a variable.
let fruitsArrayLength = FruitsArray.length;

// two functions for fruits.
function choice () {    
    // RNG anywhere from the array
    let rng = Math.floor(Math.random() * fruitsArrayLength);

    removeFruits(rng);
    return fruitsArray[rng];
}

function removeFruits(index) {
    FruitsArray.
}