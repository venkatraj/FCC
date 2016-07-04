/**
 * Created by venkat on 4/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string
 */

function findLongestWord(str) {
    var words = str.split(' ');
    words.sort(function(val1, val2) {
        return val2.length > val1.length;
    });
    return words[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");