/**
 * Created by venkat on 1/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/comparison-with-the-greater-than-or-equal-to-operator
 */

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "9 or Under";
}

// Change this value to test
testGreaterOrEqual(10);