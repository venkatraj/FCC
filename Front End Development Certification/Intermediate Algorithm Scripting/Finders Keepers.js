/**
 * Created by venkat on 15/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/finders-keepers
 */

function findElement(arr, func) {
    return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });