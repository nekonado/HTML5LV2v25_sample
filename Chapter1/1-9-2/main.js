const animals = ['cat', 'dog', 'bird'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}


// const animals = ['cat', 'dog', 'bird'];
// animals.forEach(animal => {
//     console.log(animal);
// });


// function sumNumbers(...args) {
//     let result = 0;
//     args.forEach((arg) => {
//         result += arg;
//     });
//     return result;
// }

// console.log(sumNumbers(1, 2));
// console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7)); 


// const numbers = [1, 3, 8];
// const result = [];
// numbers.forEach((number) => {
//     result.push(number * 2);
// });
// console.log(result);


// const numbers = [1, 3, 8];
// const result = numbers.map(number => number * 2);
// console.log(result);


// const numbers1 = [1, 3, 8];
// const numbers2 = [7, 9, 13];
// let result1 = 1;
// numbers1.forEach(number => {
//     result1 = result1 * number > 10 ? 0 : 1;
// });
// console.log(result1 === 0 ? true : false);
// let result2 = 1;
// numbers2.forEach(number => {
//     result2 = result2 * number > 10 ? 0 : 1;
// });
// console.log(result2 === 0 ? true : false);


// const numbers1 = [1, 3, 8];
// const numbers2 = [7, 9, 13];

// console.log(numbers1.some(number => number > 10));
// console.log(numbers2.some(number => number > 10));


// const numbers1 = [1, 3, 8];
// const numbers2 = [7, 9, 13];
// console.log(numbers1.filter(number => number > 10));
// console.log(numbers2.filter(number => number > 10));