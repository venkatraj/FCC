/**
 * Created by venkat on 5/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/seek-and-destroy
 */

function destroyer(arr) {
    // Remove all the values
    var args = Array.prototype.slice.call(arguments, 1),
        arrLength = arr.length;

    args.filter(function(item) {
        for(var i=0; i < arrLength; i++) {
            var itemIndex = arr.indexOf(item);
            if(itemIndex > -1) {
                arr.splice(itemIndex, 1);
            }
        }
    });
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);