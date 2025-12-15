

const getDispalyName = (name : string | null | undefined) => {
    return name?? "anonymous";
};

console.log(getDispalyName('John'));
console.log(getDispalyName(null));
console.log(getDispalyName(undefined));