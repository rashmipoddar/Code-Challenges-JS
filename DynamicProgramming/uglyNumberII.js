// Write a program to return the nth ugly number.
// Ugly numbers are positive numbers whose prime factors only include 2,3,5

const nthUglyNumber = (n) => {
  let uglyNumbersArray = [1];
  let twoPointer = 0;
  let threePointer = 0;
  let fivePointer = 0;
  let count = 1;
  while (count < n) {
    let mutlipleofTwo = uglyNumbersArray[twoPointer] * 2;
    let mutlipleofThree = uglyNumbersArray[threePointer] * 3;
    let mutlipleofFive = uglyNumbersArray[fivePointer] * 5;
    let minimum = Math.min(mutlipleofTwo, mutlipleofThree, mutlipleofFive);
    uglyNumbersArray.push(minimum);
    if (mutlipleofTwo === minimum) {
      twoPointer++;
    }
    if (mutlipleofThree === minimum) {
      threePointer++;
    }
    if (mutlipleofFive === minimum) {
      fivePointer++;
    }
    count++;
  }
  return uglyNumbersArray[n-1];
};

console.log(nthUglyNumber(10)); // 12
console.log(nthUglyNumber(18)); // 30