/**
 * Created by venkat on 1/7/16.
 * Solution to
 * https://www.freecodecamp.com/challenges/record-collection
 */

// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    var record = collection[id];
    if(prop !== 'tracks') {
        record[prop] = value;
    }

    if(prop === 'tracks') {
        record[prop].push(value);
    }
    if( record.hasOwnProperty(prop) && value !== '' ) {
        if(! record.hasOwnProperty('tracks')) {
            record.tracks = [];
        }
        record.tracks.push(value);
    }
    if(record.hasOwnProperty(prop) && value === '') {
        delete record[prop];
    }

    return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");