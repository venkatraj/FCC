/**
 * Created by venkat on 28/4/17.
 */
function removeDuplicates(arr) {
    return arr.filter(function(val,index){
        return arr.indexOf(val) == index;
    });
}

function sym2Arr(arr1, arr2) {
    for(var i = 0; i < arr1.length; i++) {
        for(var j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                arr1[i] = undefined;
                arr2[j] = undefined;
            }
        }
    }
    return arr1.concat(arr2).filter(function(val){
        return val !== undefined;
    });
}

// Only change code below this line
function sym(args) {
    var arr1 = arguments[0];
    var arr2 = arguments[1];
    arr1 = removeDuplicates(arr1);
    arr2 = removeDuplicates(arr2);
    var result = sym2Arr(arr1, arr2);

    if(arguments.length > 2) {
        for(var i = 2; i < arguments.length; i++) {

            result = sym2Arr(result, removeDuplicates(arguments[i]));
        }
    }
    return result;

}