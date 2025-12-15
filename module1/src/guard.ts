const isString = (value:unknown): value is string =>{
    return typeof value === 'string';
}

const uppercase = (value: unknown): void =>{
    if(isString(value)){
        console.log(value.toUpperCase());
    }else{
        console.log('value is not a string');
    }
}

uppercase('hello');
uppercase(5);