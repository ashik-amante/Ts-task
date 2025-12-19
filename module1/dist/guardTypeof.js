"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (param1, param2) => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
};
console.log(add(10, 20));
console.log(add('10', '20'));
const getUser = (user) => {
    if ('role' in user) {
        console.log(`${user.name} is ${user.role}`);
    }
    else {
        console.log(`${user.name} is a normal user `);
    }
};
const norlamUser = { name: 'John' };
const adminUser = { name: 'Dhon', role: 'admin' };
getUser(adminUser);
getUser(norlamUser);
