"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'John',
                age: 30
            });
        }, 2000);
    });
};
const getUser = async () => {
    const data = await fetchData();
    return data;
};
getUser().then((user) => console.log(user));
