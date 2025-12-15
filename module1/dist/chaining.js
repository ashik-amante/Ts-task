"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee = {
    name: 'John',
    address: {
        city: 'New York',
        state: 'NY',
        postalCode: '12345',
    }
};
const getEmployeeCity = (employee) => {
    return employee.address?.postalCode;
};
const city = getEmployeeCity(employee);
console.log(city);
