// Given an array of integers and a number i, left rotate the array i times.
// A left rotation on an array shifts each of the array's element one unit to the left.
// For eg an array [1,2,3,4,5] will become [2,3,4,5,1] by left rotation once.

const leftRotation = (array, rounds) => {
  let lastPart = array.slice(0, rounds);
  let firstPart = array.slice(rounds);
  array = firstPart.concat(lastPart);
  return array;
}

console.log(leftRotation([1,2,3,4,5], 4)); // [5,1,2,3,4]
console.log(leftRotation([41,73,89,7,10,1,59,58,84,77,77,97,58,1,86,58,26,10,86,51], 10)); // [77,97,58,1,86,58,26,10,86,51,41,73,89,7,10,1,59,58,84,77]
console.log(leftRotation([1,2,3,4,5], 0)); // [1,2,3,4,5];