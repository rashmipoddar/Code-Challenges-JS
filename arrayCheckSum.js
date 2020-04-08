// We have two integer arrays and a number. Take one number from each array and check if the sum of numbers equals sum.
// If such a pair exists return true else return false

arrayCheckSum = (array1, array2, sum) => {
  let diffSet = new Set();
  for (let i = 0; i < array1.length; i++) {
      diffSet.add(sum - array1[i]);
  }
  for (let j = 0; j < array2.length; j++) {
      if (diffSet.has(array2[j])) {
          return true;
      }
  }
  return false;
}

console.log(arrayCheckSum([1,2,3], [10,20,30,40], 42)); // true
console.log(arrayCheckSum([], [], 42)); // false
console.log(arrayCheckSum([3,4,1], [11,20,8], 12)); // true
console.log(arrayCheckSum([3,4,1], [11,20,8], 52)); // false
