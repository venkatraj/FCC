/**
 * Created by venkat on 15/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/arguments-optional
 */
function add() {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != "number") {
            return undefined;
        }
    }
    if (arguments.length == 1) {
        var val = arguments[0];
        return function () {
            if (typeof arguments[0] == "number") {
                return val + arguments[0];
            } else {
                return undefined;
            }

        };
    } else {
        return arguments[0] + arguments[1];
    }
}

add(2, 3);

/*
function addTogether() {
    var val1 = arguments[0];
    var val2 = arguments[1];
    if (typeof val1 !== "number") {
        console.log(typeof val1);
        return undefined;
    }
    if (arguments.length >= 2) {
        if (typeof val2 !== "number") {
            return undefined;
        }
        return arguments[0] + arguments[1];
    } else {
        return function (val) {
            if (typeof val !== "number") {
                return undefined;
            }
            return val1 + val;
        };
    }
}
*/

addTogether(2, 3);