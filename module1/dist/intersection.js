"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const describeAdmin = (user) => {
    return `Name : ${user.name}, Email : ${user.email}, Admin Level : ${user.adminLevel}`;
};
const user = describeAdmin({
    name: 'John',
    email: 'j@j.com',
    adminLevel: "super"
});
console.log(user);
