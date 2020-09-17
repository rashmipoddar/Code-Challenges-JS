// Given an integer array sorted in ascending order, there is exactly one integer in the array 
// that occurs more than 25% of the time. Return that integer.

const findInteger = (numbers) => {
  let count = Math.floor(numbers.length / 4);
  for (let i = 0; i < numbers.length - count; i++) {
    if (numbers[i] === numbers[i + count]) {
      return numbers[i];
    }
  }
};

console.log(findInteger([1])); // 1
console.log(findInteger([1,2,2,6,6,6,6,7,10])); // 6

