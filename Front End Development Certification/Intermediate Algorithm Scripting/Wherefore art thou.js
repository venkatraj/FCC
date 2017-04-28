/**
 * Created by venkat on 13/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/wherefore-art-thou
 */

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var keys = Object.keys(source);
    arr = collection.filter(function(obj) {
        return keys.every(function(key) {
            return obj[key] === source[key];
        });
    });

    // Only change code above this line
    return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });