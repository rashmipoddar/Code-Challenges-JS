// Given a 6 * 6 array calculate the sum of each hourglass possible 
// and return the max sum
// An hourglass is defined as a subset of the values of array with the indices as 
// 1 2 3 
//   4
// 5 6 7 

const hourglassMaxSum = (array) => {
  let sumArray = [];
  let mc = 0;
  let mr = 0;
  while (mr < 4) {
    let sum = 0;
    for (let row = mr; row <= mr + 2; row++) {
      for (let col = mc; col <= mc + 2; col++) {
        if (row === mr + 1 && col !== mc + 1) {
          continue;
        } 
        sum += array[row][col];  
      }
    }
    sumArray.push(sum);
    mc += 1;
    if (mc === 4) {
      mc = 0;
      mr += 1;
    }
  }
    return Math.max(...sumArray);
}


let array = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

let array2 = [
[-9, -9, -9, 1, 1, 1],
[0, -9, 0, 4, 3, 2],
[-9, -9, -9, 1, 2, 3],
[0, 0, 8, 6, 6, 0],
[0, 0, 0, -2, 0, 0],
[0, 0, 1, 2, 4, 0]
];

console.log(hourglassMaxSum(array)); // 19
console.log(hourglassMaxSum(array2)); // 28