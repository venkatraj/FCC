/**
 * Created by venkat on 12/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range
 */

function sumAll(arr) {
    arr.sort(function compare(val1, val2) {
        return val1 > val2;
    });

    var min = arr[0],
        max = arr[1],
        range = [];

    for(var i = min; i <= max; i++) {
        range.push(i);
    }

    return range.reduce(function(prev, cur) {
        return prev + cur;
    });
}

sumAll([1, 4]);