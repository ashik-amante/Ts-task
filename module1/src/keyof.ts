type User = {
    name : string
    age : number,
    email : string
}

const getProperty = <T, K extends keyof T>(obj : T, key : K) : T[K] =>{
    return obj[key]
}
const user: User = {name : 'John', age : 30, email : 'j@j.com'};
const name =getProperty(user, 'name');
const email =getProperty(user, 'email');
console.log(name);
console.log(email);