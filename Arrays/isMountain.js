// Given an array of numbers check if the array forms a valid mountain.
// It is a valid mountain if numbers.length >= 3
// There exists some i with 0 < i < numbers.length - 1 such that:
// numbers[0] < numbers[1] < ... numbers[i-1] < numbers[i]
// numbers[i] > numbers[i+1] > ... > numbers[numbers.length - 1]

const isMountain = (numbers) => {
  if (numbers.length < 3) {
    return false;
  }
  let isPositive = null;
  let isNegative = null;
  for (let i = 0; i < numbers.length - 1; i++) {
    let diff = numbers[i + 1] - numbers[i];
    if (diff === 0) {
      return false;
    }
    if (diff < 0) {
      isNegative = true;
    }
    if (diff > 0) {
      isPositive = true;
    }
    if (isNegative === true) {
      if (diff > 0) {
        return false;
      }
    }
  }
  if (isPositive === null || isNegative === null) {
    return false;
  }
  return true;

};

console.log(isMountain([2,1])); // false
console.log(isMountain([3,5,5,7,9,6,5,2])); // false
console.log(isMountain([1,2,3])); // false
console.log(isMountain([5,4,3,2])); // false
console.log(isMountain([0,3,2,1])); // true
console.log(isMountain([1,3,2])); // true
console.log(isMountain([3,2,4,6,2,0])); // false
