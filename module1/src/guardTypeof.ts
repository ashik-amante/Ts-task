type AlphaNumeric = string | number;    

const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }else{
        return param1.toString() + param2.toString();
    }
    
};

console.log(add(10, 20));
console.log(add('10', '20'));

// in guard

type NormalUser = {name: string, };
type AdminUser = {
    name: string,
    role: 'admin'
};

const getUser = (user : NormalUser | AdminUser)=>{
    if('role' in user){
        console.log(`${user.name} is ${user.role}`);
    }else{
        console.log(`${user.name} is a normal user `);
    }  
}
const norlamUser : NormalUser = {name : 'John'};    
const adminUser : AdminUser = {name : 'Dhon', role : 'admin'};

getUser(adminUser);
getUser(norlamUser);

