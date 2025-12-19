"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    soundMaker() {
        console.log(`${this.name} says ${this.sound}`);
    }
}
const dog = new Animal('dog', 'canine', 'ghew ghew');
dog.soundMaker();
