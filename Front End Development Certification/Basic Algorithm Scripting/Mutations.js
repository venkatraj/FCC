/**
 * Created by venkat on 5/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/mutations
 */
function mutation(arr) {
    var str1 = arr[0].toLowerCase(),
        str2 = arr[1].toLowerCase().split('');
    return str2.every(function(item){
        return str1.indexOf(item) !== -1;
    });
}

mutation(["hello", "hey"]);