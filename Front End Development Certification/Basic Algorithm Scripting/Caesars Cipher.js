/**
 * Created by venkat on 5/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/caesars-cipher
 */
function rot13(str) { // LBH QVQ VG!
    var charCode;
    str = str.split('');
    str = str.map(function(item){
        charCode = item.charCodeAt(0);
        if(charCode >= 65 && charCode <=77) {
            return charCode + 13;
        } else if(charCode > 77 && charCode <= 90) {
            return charCode - 13;
        } else {
            return charCode;
        }
    });
    return String.fromCharCode.apply(null, str);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");