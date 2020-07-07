// Given an array of digits representing a non-negative integer, add 1 to the integer 
// and return the array representation of the integer.
// The array does not contain any leading zeroes and each element in the array is a single digit

// Approach 1
const plusOne = (digits) => {
  let number = BigInt(digits.join('')) + BigInt(1);
  let numbersArray = number.toString().split('');
  return numbersArray.map(element => Number(element));
};

// Approach 2
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1,2,3])); // [1,2,4]
console.log(plusOne([9,9,9])); // [1,0,0,0]
console.log(plusOne([1,2,9])); // [1,3,0]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]