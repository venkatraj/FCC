/**
 * Created by venkat on 15/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/drop-it
 */
function dropElements(arr, func) {
    // Drop them elements.
    var arrLength = arr.length;
    for (var i = 0; i < arrLength; i++) {
        if (!func(arr[i])) {
            delete arr[i];
        } else {
            break;
        }
    }
    return arr.filter(function (val) {
        return !undefined;
    });
}

dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
});

/*
function drop(arr, func) {
    // Drop them elements.
    var removed;
    while (arr.length) {
        removed = arr.shift();
        if (func(removed)) {
            console.log(removed);
            arr.unshift(removed);
            break;
        }
    }
    return arr;
}

drop([1, 2, 3, 4], function (n) {
    return n >= 3;
});
*/