"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello = (name, age, role) => {
    console.log(`name  : ${name}`);
    console.log(`age   : ${age}`);
    if (role) {
        console.log(`role ${role}`);
    }
    else {
        console.log('Role is not defined');
    }
};
hello('John', 30, 'admin');
hello('John', 30);
