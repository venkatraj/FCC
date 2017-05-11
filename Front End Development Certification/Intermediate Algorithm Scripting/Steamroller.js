/**
 * Created by venkat on 15/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/steamroller
 */
function steamrollArray(arr) {
    // I'm a steamroller, baby
    var result = [];

    function flatten(val) {
        if (Array.isArray(val)) {
            val.forEach(flatten);
        } else {
            result.push(val);
        }
    }

    arr.forEach(flatten);
    return result;
}

steamrollArray([1, [2], [3, [[4]]]]);

/**
 * Better One
 * No need for extra forEach()
 */

function steamrollArray(arr) {
    // I'm a steamroller, baby
    var result = [];
    function flatten(val) {
        val.forEach(function(ele) {
            if(Array.isArray(ele)) {
                flatten(ele);
            } else {
                result.push(ele);
            }
        });
    }
    flatten(arr);
    return result;
}