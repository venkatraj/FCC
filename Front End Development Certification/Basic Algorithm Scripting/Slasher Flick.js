/**
 * Created by venkat on 4/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/slasher-flick
 */
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    return arr.splice(howMany);
}

slasher([1, 2, 3], 2);
