/**
 * Created by venkat on 15/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/everything-be-true
 */

function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(function(item){
        return item[pre];
    });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
