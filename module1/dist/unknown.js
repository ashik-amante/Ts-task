"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processData = (data) => {
    if (typeof data === 'string') {
        return data.toUpperCase();
    }
    else if (typeof data === 'number') {
        return data * data;
    }
    else {
        return 'unknown data type';
    }
};
const result = processData([5]);
console.log(result);
