class Person {
    constructor(name, born) {
        this.name = name;
        this.born = born;
    }
}
const john = new Person('John Lennon', 1940);
const paul = new Person('Paul McCartney', 1942);
const ringo = new Person('Ringo Starr', 1940);
console.log(john);
console.log(john.name);


// class Person {
//     constructor(name, born) {
//         this.name = name;
//         this.born = born;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }
// }
// const john = new Person('John Lennon', 1940);
// const paul = new Person('Paul McCartney', 1942);
// const ringo = new Person('Ringo Starr', 1940);
// console.log(john);
// console.log(john.name);
// john.greet();


// class Person {
//     constructor(name, born) {
//         this.name = name;
//         this.born = born;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }
// }
// class Musician extends Person {
//     constructor(name, born, part) {
//         super(name, born);
//         this.part = part;
//     }
//     introduce() {
//         console.log(`My part is ${this.part}.`);
//     }
// }
// const john = new Musician('John Lennon', 1940, 'rhythm guitar');
// console.log(john.name);
// john.greet();
// console.log(john.part);
// john.introduce();


// var Person = function (name, born) {
//     this.name = name;
//     this.born = born;
//     this.greet = function () {
//         console.log('Hello, my name is ' + this.name + '.');
//     };
// };
// var john = new Person('John Lennon', 1940);
// console.log(john.name);
// john.greet();