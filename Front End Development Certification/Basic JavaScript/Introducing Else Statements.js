/**
 * Created by venkat on 1/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/introducing-else-statements
 */

function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

// Change this value to test
testElse(4);