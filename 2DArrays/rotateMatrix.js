// Given a 2D array (matrix) rotate the array counter-clockwise. 

// const rotateMatrix = (array) => {
//   let rotatedMatrix = [];
//   let cols = array[0].length - 1;
//   while (cols >= 0) {
//     let innerArray = [];
//     for (let i = 0; i < array.length; i++) {
//       let element = array[i][cols];
//       innerArray.push(element);
//     }
//     rotatedMatrix.push(innerArray);
//     cols--;
//   }
//   return rotatedMatrix;
// }

const rotateMatrix = (array) => {
  rotatedMatrix = [];
  for (let j = array[0].length - 1; j >= 0; j--) {
    let innerArray = [];
    for (let i = 0; i < array.length; i++) {
      let element = array[i][j];
      innerArray.push(element);
    }
    rotatedMatrix.push(innerArray);
  }
  return rotatedMatrix;
}

let array = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]

console.log(rotateMatrix(array));
// [
//   [4,8,12,16],
//   [3,7,11,15],
//   [2,6,10,14],
//   [1,5,9,13]
// ]