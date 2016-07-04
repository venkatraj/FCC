/**
 * Created by venkat on 4/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/chunky-monkey
 */

function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newArr = [];
    for(var i=0; i < Math.ceil(arr.length/size); i++) {
        var start = i*size;
        var end = start+size;
        newArr.push(arr.slice(start,end));
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);