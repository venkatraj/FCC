/**
 * Created by venkat on 1/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/comparison-with-the-greater-than-operator
 */

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

// Change this value to test
testGreaterThan(10);