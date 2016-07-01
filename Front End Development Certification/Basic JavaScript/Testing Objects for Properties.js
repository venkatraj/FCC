/**
 * Created by venkat on 1/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/testing-objects-for-properties
 */

// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    if( myObj.hasOwnProperty(checkProp) ) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }

}

// Test your code by modifying these values
checkObj("gift");