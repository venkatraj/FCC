/**
 * Created by venkat on 13/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/pig-latin
 */
function translatePigLatin(str) {
    var vowels = ['a','e','i','o','u'],
        consonantCluster = '';
    str = str.split('');
    str.every(function(val) {
        if(vowels.indexOf(val) === -1) {
            consonantCluster += val;
            return true;
        }
        return false;
    });
    str = str.join('');
    str = str.substr(consonantCluster.length);
    if(consonantCluster.length > 0) {
        str += consonantCluster + 'ay';
    }  else {
        str += 'way';
    }


    return str;
}
/*
 * This may be best solution
 *
 */
/*
function translatePigLatin(str) {
    str = str.split('');
    var vowelIndex = -1;
    var vowels = ['a','e','i','o','u'];
    for(var i=0; i < str.length; i++) {
        if(vowels.indexOf(str[i]) !== -1) {
            vowelIndex = i;
            break;
        }
    }
    if(vowelIndex === 0) {
        str = str.join('') + 'way';
    } else {
        var removed = str.splice(0, vowelIndex);
        str = str.join('') + removed.join('') + 'ay';
    }
    return str;
}
*/
translatePigLatin("glove");
