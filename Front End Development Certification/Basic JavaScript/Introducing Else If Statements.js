/**
 * Created by venkat on 1/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/introducing-else-if-statements
 */

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else  if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

// Change this value to test
testElseIf(7);