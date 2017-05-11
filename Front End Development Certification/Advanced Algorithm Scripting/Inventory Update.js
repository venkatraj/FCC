/**
 * Created by venkat on 4/5/17.
 */
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var result = [], foundInArr1 = [], found = false, quantity = 0;
    // Take newInv and search for it in curInv
    // If found add it to result
    // Take note of found item in curInv
    arr2.forEach(function(arr2Item) {
        found = false;
        arr1.forEach(function(arr1Item,arr1Index) {
            if(arr1Item[1] === arr2Item[1]) {
                quantity = arr1Item[0]+arr2Item[0];
                result.push([quantity, arr1Item[1]]);
                found = true;
                foundInArr1.push(arr1Index);
            }
        });
        // If not found it is new item, add it too
        if(! found ) {
            result.push([arr2Item[0], arr2Item[1]]);
        }
    });

    // curInv may have items that are not in newInv
    // Add them to result.
    arr1.forEach(function(arr1Item, arr1Index){
        if(foundInArr1.indexOf(arr1Index) === -1) {
            result.push([arr1Item[0], arr1Item[1]]);
        }
    });

    return result.sort(function (a,b){
        return a[1] > b[1];
    });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
