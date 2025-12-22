// problem 1

// function formateString(input: string, toUpper?: boolean):string{
//     if(toUpper === true){
//         return input.toUpperCase()
//     }else if(toUpper === false){
//         return input.toLowerCase()
//     }
//     else{
//         return input.toUpperCase()
//     }
// }

// const case1 = formateString('sonar bangla')
// const case2 = formateString('sonar bangla',false)
// console.log(case1);
// console.log(case2);

// problem 2

// function filterByRatings(items : {title : string, rating: number}[]: {title: string, rating: number}[]){

// }

// problem 4

// 

// problem 5

function processValue(value: string | number): number{
    if(typeof value === 'string'){
        return value.length
    }else{
        return value * 2
    }
}
const test = processValue('abc')
const case1 = processValue(3)
console.log(test,case1);