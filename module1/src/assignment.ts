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
// const items = [
//     {title:'Beef', rating: 4.5},
//     {title:'Chicken', rating: 5},
//     {title:'BBQ', rating: 3.5},
//     {title:'ssq', rating: 5}
// ]

// function filterByRating(items : {title : string, rating: number}[]): {title: string, rating: number}[]{
//     const filteredRatings = items.filter((item)=> item.rating >= 4)
//     return filteredRatings
// }
// const item1 = filterByRating(items)
// console.log(item1);

// problem 3

// function concatenateArrays<T>(...arrays: T[][]): T[]{
//     // return arrays.flat()
//     return arrays.reduce((acc,current)=> acc.concat(current),[] as T[])
// }
// const result = concatenateArrays([1,999,3],[4,5,6],[7,8,9])
// console.log(result);

// problem 4

// class Vehicle {
//     private make : string;
//     private year: number;

//     constructor(make:string,year:number){
//         this.make = make;
//         this.year = year
//     }
//     getInfo(){
//         console.log(`Make: ${this.make}, Year: ${this.year}`);
//     }
// }
// class Car extends Vehicle{
//     private model: string;
//     constructor(make:string,year:number, model:string){
//         super(make,year)
//         this.model = model
//     }
//     getModel(){
//         console.log(`Model: ${this.model}`);
//     }
// }

// const car = new Car("toyota", 2020,'corolla')
// car.getInfo()
// car.getModel()
// 

// problem 5

// function processValue(value: string | number): number{
//     if(typeof value === 'string'){
//         return value.length
//     }else{
//         return value * 2
//     }
// }
// const test = processValue('abc')
// const case1 = processValue(3)
// console.log(test,case1);


// problem 6
// interface Product {
//   name: string;
//   price: number;
// }
// const products: Product[] = [
//   {name: 'Bag', price: 100},
//   {name: 'shoe', price: 300},
//   {name: 'jacket', price: 6000}
// ]

// function getMostExpensiveProduct(products: Product[]): Product | null {
//     return products.reduce((max,current)=>{
//       return current.price > max.price ? current : max
//     })
// }
// const result = getMostExpensiveProduct(products)
// console.log(result);

// problrm 7
// enum Day {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday
// }

// function getDayType(day: Day): string{
//   if(day === Day.Saturday || day ===Day.Sunday){
//     return "Weekend"
//   }else{
//     return "Weekday"
//   }
// }
// const test = getDayType(Day.Friday)
// console.log(test);

// problem 8
async function squareAsync(n: number): Promise<number> {
  return new Promise <number> ((resolve, reject)=>{
    setTimeout(() => {
      if(n < 0){
        reject (new Error(("Negative number not allowed")))
      }else{
        resolve (n *n);
      }
    }, 1000);
  })

}

squareAsync(-3).then(console.log).catch(error => console.log(error.message));
