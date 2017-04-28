/**
 * Created by venkat on 14/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers
 */
function sumFibs(num) {
    if(num === 1) {
        return num;
    }
    var result = [1,1], i=2, item;
    while(i <= num) {
        result.push(result[result.length-2] + result[result.length-1]);
        i = result[result.length-1];
    }
    result.pop();
    result = result.filter(function(val) {
        return val%2 !== 0;
    });
    return result.reduce(function(prev,curr) {
        return prev+curr;
    });

}

/**
 * Better one
 */

function sumFibs(num) {
    var prev = 1, curr = 1, next, result;
    result = prev + curr;
    next = result;
    while(next < num) {
        prev = curr;
        curr = next;
        next = prev + curr;
        if(next > num) {
            break;
        }
        if(next%2 !== 0) {
            result += next;
        }
    }
    return result;
}

sumFibs(4);

sumFibs(1000);

/*
 function sumFibs(num) {
 var first = 1;
 var second = 1;
 var third = 2;
 var fib = [1,1];
 while(third <= num) {
 third = first + second;
 first = second;
 second = third;
 if(third<=num) {
 fib.push(third);
 }
 }
 return fib.filter(function(item){
 console.log(item);
 return item%2 !==0;
 }).reduce(function(prev,curr){
 return prev+curr;
 });
 }

 sumFibs(4);
 */