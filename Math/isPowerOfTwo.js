// Write a function to check if the given integer is a power of two

// Approach 1
const isPowerOfTwo = (number) => {
  let value = 0;
  let power = 0;
  while (value <= number) {
    value = Math.pow(2, power);
    if (value === number) {
      return true;
    } else {
      power++;
    }
  }
  return false;
}

// Approch 2 
// const isPowerOfTwo = (number) => {
//   if (number === 1) {
//     return true;
//   }
//   if (number % 2 !== 0 || number === 0) {
//     return false;
//   }
//   return isPowerOfTwo(number/2);
// }

console.log(isPowerOfTwo(0)); // false
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(216)); // false