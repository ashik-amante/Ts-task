"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc = (param) => {
    if (typeof param === 'string') {
        return param.length;
    }
    else {
        return param * param;
    }
};
const result = calc(5);
console.log(result);
