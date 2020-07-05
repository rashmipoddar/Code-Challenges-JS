// Write a program to check if a given number is an ugly number
// Ugly numbers are positive numbers whose prime factors only include 2,3,5

const isUgly = function(num) {
  if (num <= 0) {
    return false;
  }
  while (num !== 1) {
    if (num % 5 === 0) {
      num = num / 5;
    } else if (num % 3 === 0) {
      num = num / 3;
    } else if (num % 2 === 0) {
      num = num / 2;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isUgly(0)); // false
console.log(isUgly(1)); // true
console.log(isUgly(6)); // true
console.log(isUgly(22)); // false