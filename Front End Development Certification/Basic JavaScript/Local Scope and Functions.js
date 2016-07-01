/**
 * Created by venkat on 1/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/local-scope-and-functions
 */

function myLocalScope() {
    'use strict';
    var myVar = 10;

    console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log(myVar);

// Now remove the console log line to pass the test