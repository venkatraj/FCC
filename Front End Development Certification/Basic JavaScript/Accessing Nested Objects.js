/**
 * Created by venkat on 1/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/accessing-nested-objects
 */

// Setup
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

// Only change code below this line

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line