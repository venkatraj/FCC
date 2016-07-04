/**
 * Created by venkat on 4/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/condense-arrays-with-reduce
 */

var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.

singleVal = array.reduce(function(prevVal,currVal) {
    return prevVal+currVal;
});