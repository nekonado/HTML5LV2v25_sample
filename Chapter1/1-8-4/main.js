const getIsEven = num => {
    if (num % 2 === 0) {
        return '偶数';
    } else {
        return '奇数';
    }
};

console.log(getIsEven(5));



// const getIsEven = num => {
//     return num % 2 === 0 ? '偶数' : '奇数';
// };

// console.log(getIsEven(5));


// const getIsEven = num => num % 2 === 0 ? '偶数' : '奇数';
// console.log(getIsEven(5));