const getTriangleArea = function(base, height) {
  const area = base * height / 2;
  return area;
};

const area1 = getTriangleArea(4, 5);
const area2 = getTriangleArea(2, 80);
console.log(area1); // 結果: 10
console.log(area2); // 結果: 80


// const area1 = getTriangleArea(4, 5);
// console.log(area1);
// function getTriangleArea(base, height) {
// const area = (base * height) / 2;
// return area;
// }


// const area1 = getTriangleArea(4, 5);
// console.log(area1);

// const getTriangleArea = function(base, height) {
//   const area = base * height / 2;
//   return area;
// };


// const getTriangleArea = (base, height) => {
//   const area = base * height / 2;
//   return area;
// };

// const area1 = getTriangleArea(4, 5);
// console.log(area1); // 結果: 10

