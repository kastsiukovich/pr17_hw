'use strict'

// task1

function flatten(arr) {
    const [first, two, ...rest] = arr;
    let finish = first.concat(two, ...rest)
    return finish
}
console.log(flatten([[1, 2], [3, 4]]));
console.log(flatten([["a", "b"], ["c", "d"]]));
console.log(flatten([[true, false], [false, false], [true, true]]));


// task2

function afterNYears(obj, ...rest) {
    const year = {};
    let el = 0;
    for (var key in obj) {
        el = (obj[key] + +rest)
        year[key] = el;
    }
    return year
}

console.log(afterNYears({ "Joel": 32, "Fred": 44, "Reginald": 65, "Susan": 33, "Julian": 13 }, 1));
console.log(afterNYears({ "Baby": 2, "Child": 8, "Teenager": 15, "Adult": 25, "Elderly": 71 }, 19));
console.log(afterNYears({ "Joel": 32, "Fred": 44, "Reginald": 65, "Susan": 33, "Julian": 13 }, 1));
console.log(afterNYears({ "Genie": 1000, "Joe": 40 }, 5));

// task 3
function canConcatenate(arr, arrF) {
    let [item1, ...rest] = arr;
    let newArr = ((item1 + ',' + rest).split(',').sort().map(it => +it));
    newArr.forEach(function (item, index, arr1) {
        if (+item === index + 1 && arr1.length === arrF.length && arr1.length === arrF.length) {
            console.log(true);
        } else {
            console.log(false)
        }
    })
}

canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]);
canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]);
canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]);
canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]);
