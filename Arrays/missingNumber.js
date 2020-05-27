// Given an array containing n numbers from 1 to n find the missing number.

// Approach 1 - Using a set
const missingNumber = (nums) => {
  let numsSet = new Set(nums);
  for (let i = 0; i <= nums.length; i++) {
    if (!numsSet.has(i)) {
      return i;
    }
  }
}

// Approach 2 - Sort and loop 
// const missingNumber = (nums) => {
//   nums.sort((a,b) => a-b);
//   if (nums[0] !== 0) {
//     return 0;
//   }
//   if (nums[nums.length - 1] !== nums.length) {
//     return nums.length;
//   }
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== i) {
//       return i;
//     }
//   }
// }

// Approach 3 
// The sum of first n numbers is n(n + 1) / 2
// const missingNumber = (nums) => {
//   let n =  nums.length;
//   let sum = (n * (n + 1))/2;
  
//   let actualSum = 0;
//   for (let num of nums) {
//     actualSum += num;
//   }
  
//   let result = sum - actualSum;
//   return result;
// }


console.log(missingNumber([0])) // 1
console.log(missingNumber([3,0,1])) // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])) // 8