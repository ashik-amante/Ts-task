"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car1 {
    startEngine() {
        console.log('Engine start');
    }
    stopEngine() {
        console.log('stop engine');
    }
    move() {
        console.log('move the car');
    }
    test() {
        console.log('emni dilam');
    }
}
const getCar = (param) => {
    param.startEngine();
    param.stopEngine();
    param.move();
};
const toyota = new Car1();
getCar(toyota);
// abstract
// idea
class Car2 {
    test() {
        console.log('emni dilam');
    }
}
class Toyota extends Car2 {
    startEngine() {
        console.log('Engine start');
    }
    stopEngine() {
        console.log('stop engine');
    }
    move() {
        console.log('move the car');
    }
    test() {
        console.log('emni dilam');
    }
}
