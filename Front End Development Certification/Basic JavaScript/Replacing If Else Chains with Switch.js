/**
 * Created by venkat on 1/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/replacing-if-else-chains-with-switch#?solution=%0Afunction%20chainToSwitch(val)%20%7B%0A%20%20var%20answer%20%3D%20%22%22%3B%0A%20%20%2F%2F%20Only%20change%20code%20below%20this%20line%0A%20%20switch(val)%20%7B%0A%20%20%20%20case%20%22bob%22%3A%0A%20%20%20%20%20%20answer%20%3D%20%22Marley%22%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20case%2042%3A%0A%20%20%20%20%20%20answer%20%3D%20%22The%20Answer%22%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20case%201%3A%0A%20%20%20%20%20%20answer%20%3D%20%22There%20is%20no%20%231%22%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20case%2099%3A%0A%20%20%20%20%20%20answer%20%3D%20%22Missed%20me%20by%20this%20much!%22%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20case%207%3A%0A%20%20%20%20%20%20answer%20%3D%20%22Ate%20Nine%22%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20%7D%0A%20%20%2F%2F%20Only%20change%20code%20above%20this%20line%20%20%0A%20%20return%20answer%3B%20%20%0A%7D%0A%0A%2F%2F%20Change%20this%20value%20to%20test%0AchainToSwitch(7)%3B%0A%0A
 */

function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    // Only change code above this line
    return answer;
}

// Change this value to test
chainToSwitch(7);

