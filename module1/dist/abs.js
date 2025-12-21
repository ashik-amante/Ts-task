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
const toyota = new Car1();
toyota.startEngine();
// abstract
// idea
class Car2 {
    startEngine() {
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
