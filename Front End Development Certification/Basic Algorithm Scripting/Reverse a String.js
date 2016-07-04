/**
 * Created by venkat on 4/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/reverse-a-string
 */

function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString("hello");