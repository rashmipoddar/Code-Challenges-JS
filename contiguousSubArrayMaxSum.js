// Find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Input is an array of integers

const contiguousSubArrayMaxSum = (nums) => {
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
      let localSum = nums[i];
      if (localSum > maxSum) {
          maxSum = localSum;
      }
      for (let j = i+1; j < nums.length; j++) {
          localSum += nums[j];
          if (localSum > maxSum) {
              maxSum = localSum;
          }
      }
  }
  return maxSum;
};


console.log(contiguousSubArrayMaxSum([4,-1,2,1])) // 6
console.log(contiguousSubArrayMaxSum([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(contiguousSubArrayMaxSum([1,2])) // 3
console.log(contiguousSubArrayMaxSum([-2, 1])) // 1
