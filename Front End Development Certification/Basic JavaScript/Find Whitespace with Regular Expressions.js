/**
 * Created by venkat on 2/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/find-whitespace-with-regular-expressions
 */

// Setup
var testString = "How many spaces are there in this sentence?";

// Only change code below this line.

var expression = /\s+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var spaceCount = testString.match(expression).length;