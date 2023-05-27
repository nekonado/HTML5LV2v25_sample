const getIsAdult = age => {
  if (age >= 18) {
    return '成人です';
  } else {
    return '未成年です';
  }
};
console.log(getIsAdult(40));
console.log(getIsAdult(16));


// const checkBMI = (height, weight) => {
//   const bmi = weight / (height * height);
//   if (bmi >= 25) {
//     return '太りすぎです';
//   } else if (bmi < 18.5) {
//     return '痩せすぎです';
//   } else {
//     return '標準体型です';
//   }
// };
// console.log(checkBMI(1.76, 62));

// const checkBMI = (height, weight) => {
//   const bmi = weight / (height * height);
//   if (bmi >= 25) {
//     if (bmi >= 40) {
//       return '太りすぎです、肥満度は4度です';
//     } else if (bmi >= 35) {
//       return '太りすぎです、肥満度は3度です';
//     } else if (bmi >= 30) {
//       return '太りすぎです、肥満度は2度です';
//     } else {
//       return '太りすぎです、肥満度は1度です';
//     }
//   } else if (bmi < 18.5) {
//     return '痩せすぎです';
//   } else {
//     return '標準体型です';
//   }
// };

// console.log(checkBMI(1.76, 62));