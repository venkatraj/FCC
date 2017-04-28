/**
 * Created by venkat on 14/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/smallest-common-multiple
 */

//noprotect
function smallestCommons(arr) {
    arr.sort(function(val1,val2){
        return val2 - val1;
    });
    var range = [], smallest = arr[1], largest = arr[0], found = false, count = 2, i =2;
    function match (item){
        count = 2;
        while(count*item <= largest) {
            if(item*count === largest) {
                return true;
            }
            count++;
        }
    }
    while(smallest < largest){
        range.push(smallest++);
    }
    while(i<=(Number.MAX_VALUE)) {
        largest = arr[0] * i;
        found = range.every(match);
        if(found === true) {
            return largest;
        }
        i++;
    }
}

smallestCommons([1,5]);

/*
 function smallestCommons(arr) {
 arr.sort(function(val1, val2) {
 return val1 < val2;
 });
 var largest = arr[0],
 smallest = arr[1],
 range = [],
 smallestCount = 3,
 largestCount = 3,
 smallestMulti = smallest * 2,
 largestMulti = largest * 2;

 while(smallestMulti < largestMulti) {
 range.push(smallestMulti);
 smallestMulti = smallest * smallestCount++;
 }


 function match(val) {
 return val !== largestMulti;
 }

 while(largestMulti < Number.MAX_VALUE) {
 if(range.every(match)) {
 largestMulti = largest * largestCount++;
 while(smallestMulti < largestMulti) {
 smallestMulti = smallest * smallestCount++;
 range.push(smallestMulti);
 }
 console.log(range);
 } else {
 return largestMulti;
 }
 }



 console.log(range);
 }


 smallestCommons([1,5]);

 */
