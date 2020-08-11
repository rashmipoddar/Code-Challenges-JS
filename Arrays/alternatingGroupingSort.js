// Given an array of numbers, create a new array by taking 
// the first element of the array, then the last, then the second last, then the last but one in an alternating pattern
// Return whether the new array created is sorted in an ascending order

const alternatingGroupingSort = (numbers) => {
  let numbersLen = numbers.length;
  let orderedNums = [];
  let orderedNumsLen = 0;
  let forwardIndex = 0;
  let backwardIndex = numbersLen - 1;
  let forward = true;
  let backward = false;
  while (orderedNumsLen !== numbersLen) {
    if (forward === true) {
      orderedNums.push(numbers[forwardIndex]);
      forwardIndex += 1;
      forward = false;
      backward = true;
      orderedNumsLen += 1;
    } else {
      orderedNums.push(numbers[backwardIndex]);
      backwardIndex -= 1;
      forward = true;
      backward = false;
      orderedNumsLen += 1;
    }
  }
  // console.log(orderedNums);
  for (let i = 1; i < orderedNumsLen; i++) {
    if (orderedNums[i] - orderedNums[i-1] < 0) {
      return false;
    }
  }
  return true;
}

console.log(alternatingGroupingSort([1,3,5,6,4,2])); // true
console.log(alternatingGroupingSort([1,4,5,6,3]));  // false
console.log(alternatingGroupingSort([1,2,3,4,5])); // false
console.log(alternatingGroupingSort([10,15,20])); // false