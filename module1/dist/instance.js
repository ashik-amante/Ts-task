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
        console.log('Hudai chillai');
    }
}
class Dog extends Animal {
    constructor(name, species, sound) {
        super(name, species, sound);
    }
    soundDog() {
        console.log(`${this.name} says ${this.sound}`);
    }
}
class Cat extends Animal {
    constructor(name, species, sound) {
        super(name, species, sound);
    }
    soundCat() {
        console.log(`${this.name} says ${this.sound}`);
    }
}
// const getAnimal = (animal:Animal)=>{
//     if(animal instanceof Dog){
//         animal.soundDog();
//     }else if(animal instanceof Cat){
//         animal.soundCat();
//     }else{
//         animal.soundMaker();
//     }
// }
// samart
const isDog = (animal) => {
    return animal instanceof Dog;
};
const isCat = (animal) => {
    return animal instanceof Cat;
};
const getAnimal = (animal) => {
    if (isDog(animal)) {
        animal.soundDog();
    }
    else if (isCat(animal)) {
        animal.soundCat();
    }
    else {
        animal.soundMaker();
    }
};
const dog = new Dog('dog', 'canine', 'ghew ghew');
const cat = new Cat('cat', 'feline', 'meow meow');
getAnimal(dog);
getAnimal(cat);
getAnimal(new Animal('animal', 'animal', 'animal'));
