const calc = (param: string| number): string| number => {
    if(typeof param === 'string'){
        return param.length
    }else{
        return param * param;
    }
};

const result = calc(5);
console.log(result);