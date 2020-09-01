// Given an array of n + 1 numbers where n is the length of the array
// And each number is between 1 to n find the duplicate

const findDuplicate = (numbers) => {
  numbers.sort((a,b) => a - b);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== i + 1) {
      return numbers[i];
    }
  }
}

console.log(findDuplicate([1,2,2,3,4])); // 2
console.log(findDuplicate([3,2,1,4,1])); // 1
