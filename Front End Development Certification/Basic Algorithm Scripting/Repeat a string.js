/**
 * Created by venkat on 4/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/repeat-a-string
 */

function repeatStringNumTimes(str, num) {
    // repeat after me
    if(num < 0) {
        return '';
    }
    return str.repeat(num);
}

repeatStringNumTimes("abc", 3);