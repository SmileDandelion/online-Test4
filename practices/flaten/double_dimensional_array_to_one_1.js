'use strict';

function insertMultArray(collection2, newArray) {
    for (var b = 0; b < collection2.length; b++) {
        newArray.push(collection2[b]);
    }
}

function double_to_one(collection) {

    var newArray = [];
    for (var a = 0; a < collection.length; a++) {

        if (collection[a] instanceof Array) {
            insertMultArray(collection[a], newArray);
        }
        else {
            newArray.push(collection[a]);
        }
    }

    return newArray;
}

module.exports = double_to_one;
