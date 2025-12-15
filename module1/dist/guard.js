"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isString = (value) => {
    return typeof value === 'string';
};
const uppercase = (value) => {
    if (isString(value)) {
        console.log(value.toUpperCase());
    }
    else {
        console.log('value is not a string');
    }
};
uppercase('hello');
uppercase(5);
