"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDispalyName = (name) => {
    return name ?? "anonymous";
};
console.log(getDispalyName('John'));
console.log(getDispalyName(null));
console.log(getDispalyName(undefined));
