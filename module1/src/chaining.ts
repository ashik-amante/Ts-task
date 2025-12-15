type Employee = {
    name: string,
    address: {
        city: string,
        state: string,
        postalCode?: string
    }
}

const employee : Employee = {
    name: 'John',
    address: {
        city: 'New York',
        state: 'NY',
        postalCode: '12345',
    }
}
const getEmployeeCity = (employee : Employee ): string | undefined =>{
    return employee.address?.postalCode;
}
const city = getEmployeeCity(employee);
console.log(city);