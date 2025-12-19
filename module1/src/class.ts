class Animal{
    

    constructor(public name:string,public species:string, public sound:string){}
    soundMaker(){
        console.log(`${this.name} says ${this.sound}`);
    }
}
const dog = new Animal('dog', 'canine', 'ghew ghew');
dog.soundMaker();
