/**
 * Created by venkat on 4/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/check-for-palindromes
 */


function palindrome(str) {
    // Good luck!
    str = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    return str.split('').reverse().join('') === str;
}

palindrome("eye");

