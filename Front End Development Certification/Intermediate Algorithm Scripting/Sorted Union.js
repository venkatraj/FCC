/**
 * Created by venkat on 14/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/sorted-union
 */
function uniteUnique(arr) {
    var argsLength = arguments.length;
    for(var i=1; i < argsLength; i++) {
        arguments[i].forEach(function(val) {
            if(arr.indexOf(val) === -1) {
                arr.push(val);
            }
        });
    }
    return arr;
}
/*
 * Better one?
 */
/*
function uniteUnique(arr) {
    var result = [];
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(ele){
        ele.forEach(function(val){
            if(result.indexOf(val) === -1) {
                result.push(val);
            }
        });
    });
    return result;
}
*/

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);