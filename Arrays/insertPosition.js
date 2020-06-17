// Given a sorted array and a target value return the index of target, if found.
// If not found, return the index at which it should be inserted to keep the array in order

// Approach 1 : Linear search
// const insertPosition = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i;
//     }
//     if (nums[i] > target) {
//       return i;
//     }
//   }
//   return nums.length;
  
// };

// Approach 2 : Binary search
const insertPosition = function(nums, target) {
  if (target < nums[0]) {
    return 0;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  if (nums.length === 1 && target === nums[0]) {
    return 0;
  }
  let low = 0;
  let high = nums.length - 1;
  while(low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
        if (nums[mid + 1] > target) {
          return mid + 1;
        } 
        low = mid + 1;
    } else {
        if (nums[mid - 1] < target) {
          return mid;
        }
        high = mid - 1;
    }
  }
}

console.log(insertPosition([1,2,3,4], 4)); // 3
console.log(insertPosition([1,3,5,6], 2)); // 1
console.log(insertPosition([1,3,6,7], 8)); // 4
console.log(insertPosition([1,3,5,6], 0)); // 0