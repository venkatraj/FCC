/**
 * Created by venkat on 4/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/confirm-the-ending
 */

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    return str.substr(-target.length) === target;
}

confirmEnding("Bastian", "n");