/**
 * Created by venkat on 1/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/using-objects-for-lookups
 */

// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    var lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    };

    result = lookup[val];
    // Only change code above this line
    return result;
}

// Change this value to test
phoneticLookup("charlie");