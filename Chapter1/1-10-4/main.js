const myProfile = {
    lastName: '右寺',
    firstName: '隆信',
    birthyear: '1982',
    hometown: '佐賀',
    sayHello() {
        console.log('Hello');
    },
    greet() {
        console.log(
            `私の名前は${this.lastName}${this.firstName}です。${this.birthyear}年生まれで、${this.hometown}出身です。`
        );
    },
};
myProfile.greet();


// function func() {
//     console.log(this);
// }
// func();


// const obj = {
//     str: 'abc',
//     func1() {
//         console.log(this.str); // メソッド呼び出し
//         const func2 = function () {
//             console.log(this.str); // 関数呼び出し
//         };
//         func2();
//     }
// }
// obj.func1();


// const obj = {
//     str: 'abc',
//     func1() {
//         console.log(this.str);
//         const func2 = () => {
//             console.log(this.str);
//         };
//         func2();
//     }
// }
// obj.func1();


// const obj = {
//     str: 'abc',
//     func1() {
//         var that = this;
//         console.log(that.str);
//         const func2 = function () {
//             console.log(that.str);
//         };
//         func2();
//     }
// }
// obj.func1();