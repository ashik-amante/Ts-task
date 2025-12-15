
// const reverse = (str : string): string=>{
//     let newString = '';
//     for(let i = str.length-1; i >= 0; i--){
//         newString += str[i];
//     }
//     return newString;
// }

// const result = reverse('hello');
// console.log(result);

const reverse = (str:string):string=>{
    const arr = str.split('')
    arr.reverse()
    return arr.join('') 
}

const result = reverse('123');
console.log(result);