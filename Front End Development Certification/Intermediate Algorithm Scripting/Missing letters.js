/**
 * Created by venkat on 13/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/missing-letters
 */
function fearNotLetter(str) {
    var firstLetter = str.charCodeAt(0),
        result;
    str = str.split('');
    result = str.every(function(val) {
        return val.charCodeAt(0) == firstLetter++;
    });
    if(result === true) {
        return undefined;
    } else {
        return String.fromCharCode(--firstLetter);
    }
}
/*
 * Better one?
 */

function fearNotLetter(str) {
    var firstLetter = str.charCodeAt(0),
        result;
    str = str.split('');
    result = str.every(function(val) {
        return val.charCodeAt(0) == firstLetter++;
    });
    return result === true ? undefined : String.fromCharCode(--firstLetter);
}

/*
function fearNotLetter(str) {
    var firstChar = str.charCodeAt(0);
    var notFound = false;
    for(var i = 0; i < str.length; i++){
        if(String.fromCharCode(firstChar) !== str[i] ) {
            notFound = true;
            break;
        }
        firstChar++;
    }
    return notFound ? String.fromCharCode(firstChar): undefined;
}
*/
fearNotLetter("abcdefghjklmno");