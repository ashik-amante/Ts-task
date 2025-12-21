"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    sleep() {
        console.log(`person sleep 8 hours a day.`);
    }
}
class Student extends Person {
    sleep() {
        console.log(`student sleep 7 hours a day.`);
    }
}
class Developer extends Person {
    sleep() {
        console.log(`developer sleep 6 hours a day.`);
    }
}
const sleepingHoours = (params) => {
    params.sleep();
};
const parson1 = new Person();
const student1 = new Student();
const developer1 = new Developer();
sleepingHoours(parson1);
sleepingHoours(student1);
sleepingHoours(developer1);
// calculate area
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    height;
    width;
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
const getShapeArea = (param) => {
    console.log(param.getArea());
};
const circle = new Circle(5);
const rectangle = new Rectangle(5, 10);
getShapeArea(circle);
getShapeArea(rectangle);
