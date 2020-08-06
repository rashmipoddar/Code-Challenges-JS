// Given a 2d array, find out the average of each sub-array and 
// return an array which groups the indexes of the sub-arrays together whose mean are equal. 
// Each sub-array should be sorted in an ascending order and 
// the array should be sorted in ascending order.

const meanGroups = (array) => {
  let meanObject = {};
  for (let i = 0; i < array.length; i++) {
    let numbers = array[i];
    let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    let average = sum / numbers.length;
    if (!meanObject[average]) {
      meanObject[average] = [i];
    } else {
      meanObject[average].push(i);
    }
  }

  let values = Object.values(meanObject);
  for (let i = 0; i < values.length; i++) {
    let group = values[i];
    group.sort((a, b) => a - b);
  }

  values.sort((a, b) => a[0] - b[0]);
  return values;
}

let array1 = [
  [3, 3, 4, 2],
  [4, 4],
  [4, 0, 3, 3],
  [2, 3],
  [3, 3, 3]
];

let array2 = [
  [-5, 2, 3],
  [0, 0],
  [0],
  [-100, 100]
];

console.log(meanGroups(array1)); // [ [ 0, 4 ], [ 1 ], [ 2, 3 ] ]
console.log(meanGroups(array2)); // [ [ 0, 1, 2, 3 ] ]
