/**
 * Created by venkat on 4/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays
 */

function largestOfFour(arr) {
    // You can do this!
    var result = [];
    for(var i=0; i < arr.length; i++) {
        result[i] = Math.max.apply(null,arr[i]);
    }
    return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);