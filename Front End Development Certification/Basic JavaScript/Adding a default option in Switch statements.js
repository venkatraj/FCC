/**
 * Created by venkat on 1/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/adding-a-default-option-in-switch-statements
 */

function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
    }


    // Only change code above this line
    return answer;
}

// Change this value to test
switchOfStuff(1);