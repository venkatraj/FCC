/**
 * Created by venkat on 1/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/delete-properties-from-a-javascript-object
 */

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Free Code Camp Campers"],
    "bark": "woof"
};

// Only change code below this line.
delete myDog.tails;