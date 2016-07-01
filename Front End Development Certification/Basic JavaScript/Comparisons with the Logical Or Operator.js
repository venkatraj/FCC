/**
 * Created by venkat on 1/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/comparisons-with-the-logical-or-operator
 */

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

// Change this value to test
testLogicalOr(15);