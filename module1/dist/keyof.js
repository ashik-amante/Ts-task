"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getProperty = (obj, key) => {
    return obj[key];
};
const user = { name: 'John', age: 30, email: 'j@j.com' };
const name = getProperty(user, 'name');
const email = getProperty(user, 'email');
console.log(name);
console.log(email);
