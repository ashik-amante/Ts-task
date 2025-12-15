"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeDuplicates = (arr) => {
    let newArr = [];
    for (let item of arr) {
        if (!newArr.includes(item)) {
            newArr.push(item);
        }
    }
    return newArr;
};
const result = removeDuplicates([1, 2, 3, 4, 1, 2]);
console.log(result);
const result2 = removeDuplicates(['a', 'b', 'c', 'd', 'a', 'b']);
console.log(result2);
