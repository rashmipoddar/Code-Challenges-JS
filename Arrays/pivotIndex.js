// Given an array of numbers return the pivot index
// Pivot index is the index where the sum of all numbers to the left of the index is equal to
// the sum of the all the numbers to the right of the index
// If a pivot index does not exist return -1;

const pivotIndex = (nums) => {
  let totalSum = nums.reduce((accumulator, value) => accumulator + value, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === (totalSum - leftSum - nums[i])) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1,7,3,6,5,6])); // 3
console.log(pivotIndex([1,2,3])); // -1
console.log(pivotIndex([-1,-1,-1,0,1,1])); // 0