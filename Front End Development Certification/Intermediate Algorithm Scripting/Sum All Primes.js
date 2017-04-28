/**
 * Created by venkat on 14/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/sum-all-primes
 */
/**
 * Created by venkat on 12/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range
 */


function sumPrimes(num) {
    var range = [], divided = false;

    for(var i = 2; i <= num; i++) {
        range.push(i);
    }

    range = range.filter(function(val){
        divided = false;
        for(var i = 2; i < val; i++){
            if(val%i ===0) {
                divided = true;
                break;
            }
        }
        return !divided;
    });
    return range.reduce(function(prev,curr) {
        return prev+curr;
    });
}

/**
 * There is always a choice
 */

function sumPrimes(num) {
    var primes = [2], isPrime = true;
    for(var i = 3; i <= num ; i++) {
        for(var j = 2; j < i; j++) {
            if(i%j === 0) {
                isPrime = false;
            }
        }
        if(isPrime) {
            primes.push(i);
        }
        isPrime = true;
    }
    return primes.reduce(function(prev, curr){
        return prev+curr;
    });
}

sumPrimes(10);
