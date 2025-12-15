
const hello = (
    name: string,
    age: number,
    role?: 'admin' | 'developer'|'guest'
) : void=> {
    console.log(`name  : ${name}`);
    console.log(`age   : ${age}`);
    if(role){
        console.log(`role ${role}`);
    }else{
        console.log('Role is not defined');
    }

};

hello('John', 30, 'admin');
hello('John', 30);