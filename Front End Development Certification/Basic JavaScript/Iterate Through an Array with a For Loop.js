/**
 * Created by venkat on 2/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/iterate-through-an-array-with-a-for-loop
 */

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for(var j = 0; j < myArr.length; j++) {
    total += myArr[j];
}