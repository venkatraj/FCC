/**
 * Created by venkat on 14/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/spinal-tap-case
 */
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().replace(/[\s_]/g, '-');
}

spinalCase("thisIsSpinalTap");