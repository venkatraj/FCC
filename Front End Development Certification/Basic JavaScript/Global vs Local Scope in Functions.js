/**
 * Created by venkat on 1/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/global-vs-local-scope-in-functions
 */

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    var outerWear = "sweater";


    // Only change code above this line
    return outerWear;
}

myOutfit();