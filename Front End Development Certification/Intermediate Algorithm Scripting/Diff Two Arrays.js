/**
 * Created by venkat on 12/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/diff-two-arrays
 */
function diffArray(arr1, arr2) {
    var newArr1 = [],
        newArr2 = [],
        result = [];
    // Same, same; but different.
    newArr1 = arr1.filter(function(val) {
        return arr2.indexOf(val) === -1;
    });

    newArr2 = arr2.filter(function(val) {
        return arr1.indexOf(val) === -1;
    });

    result = newArr1.concat(newArr2);

    return result;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
