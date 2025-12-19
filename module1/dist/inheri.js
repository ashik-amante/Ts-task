"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parson {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(hours) {
        return `${this.name}sleep ${hours} hours a day.`;
    }
}
class Student extends Parson {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
class Teacher extends Parson {
    designation;
    constructor(name, age, address) {
        super(name, age, address);
        this.designation = 'teacher';
    }
    takeClass(hours) {
        return `${this.name}take class ${hours} hours a day.`;
    }
}
const student1 = new Student('John', 30, 'New York');
student1.getSleep(8);
console.log(student1);
const teacher1 = new Teacher('John', 30, 'New York');
teacher1.takeClass(8);
console.log(teacher1);
