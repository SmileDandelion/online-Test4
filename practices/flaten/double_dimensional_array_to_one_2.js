'use strict';

function isExist(collection, newArray) {

    for (var a = 0; a < newArray.length; a++) {

        if (collection === newArray[a]) {

            return 1;
        }
    }

    return 0;
}

function insertMultArray(collection2, newArray) {

    for (var b = 0; b < collection2.length; b++) {

        if (!isExist(collection2[b], newArray)) {
            newArray.push(collection2[b]);
        }
    }
}

function singleItem(collection2, newArray) {

    for (var a = 0; a < newArray.length; a++) {

        if (newArray[a] === collection2) {

            return;
        }
    }
    newArray.push(collection2);
}

function double_to_one(collection) {

    var newArray = [];
    for (var a = 0; a < collection.length; a++) {

        if (collection[a] instanceof Array) {
            insertMultArray(collection[a], newArray);
        }
        else {
            singleItem(collection[a], newArray);
        }
    }

    return newArray;
}

module.exports = double_to_one;
