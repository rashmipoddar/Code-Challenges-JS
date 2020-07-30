// A lucky number is the number that has the frequency in an array equal to its value.
// Find the lucky number. If there are multiple lucky numbers, return the largest one.
// Return -1 if there in no lucky number.

const findLuckyNumber = (numbers) => {
  let numbersCount = {};
  let luckyNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (!numbersCount[numbers[i]]) {
      numbersCount[numbers[i]] = 1;
    } else {
      numbersCount[numbers[i]] += 1;
    }
  }

  for (key in numbersCount) {
    if (Number(key) === numbersCount[key]) {
      luckyNumbers.push(numbersCount[key]);
    }
  }

  if (luckyNumbers.length === 0) {
    return -1;
  } else {
    return Math.max(...luckyNumbers);
  }

};

console.log(findLuckyNumber([2,2,3,4])); // 2
console.log(findLuckyNumber([1,2,2,3,3,3])); // 3
console.log(findLuckyNumber([2,2,2,3,3])); // -1