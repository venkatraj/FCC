/**
 * Created by venkat on 2/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/profile-lookup
 */

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
    var nameFound = false, propFound = false, propValue;
    for( var i = 0; i < contacts.length; i++ ) {
        if( contacts[i].firstName === firstName) {
            nameFound = true;
            if( contacts[i].hasOwnProperty(prop) ) {
                propFound = true;
                propValue  = contacts[i][prop];
                break;
            }
        }
    }
    if(! nameFound ) {
        return "No such contact";
    }
    if( ! propFound ) {
        return "No such property";
    }
    return propValue;
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");