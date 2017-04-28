/**
 * Created by venkat on 13/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/search-and-replace
 */
function myReplace(str, before, after) {
    var afterArr = after.split('');
    var charCode = before.charCodeAt(0);
    if(charCode >=65 && charCode <=90) {
        afterArr[0] = afterArr[0].toUpperCase();
        after = afterArr.join('');
    }

    return str.replace(before,after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
