/**
 * Created by venkat on 5/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/falsy-bouncer
 */

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(function(item) {
        return Boolean(item);
    });
}

bouncer([7, "ate", "", false, 9]);