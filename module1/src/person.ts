type Person = {
    name: string;
    address: string;
    age: number;
    hairColor: 'black' | 'brown' | 'blonde';
    eyeColor: 'green' | 'blue' | 'brown' | 'gray';
    income: number;
    expenses: number;
    hobbies: string[];
    familyMember:string[];
    job:'student' | 'developer' | 'designer' | 'engineer'; 
    skills:string[];
    maritalStatus:'married' | 'single';
    friends:string[]
};

const person1: Person = {
    name: 'John',
    address: '123 Main St',
    age: 30,
    hairColor: 'brown',
    eyeColor: 'blue',
    income: 50000,
    expenses: 2000,
    hobbies: ['reading', 'gaming'],
    familyMember: ['wife', 'children'],
    job: 'student',
    skills: ['JavaScript', 'HTML', 'CSS'],
    maritalStatus: 'married',
    friends: ['Alice', 'Bob']       
} 
console.log(person1);