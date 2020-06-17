// Given a sorted array and a target value return the index of target, if found.
// If not found, return the index at which it should be inserted to keep the array in order

const insertPosition = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
    if (nums[i] > target) {
      return i;
    }
  }
  return nums.length;
  
};

console.log(insertPosition([1,2,3,4], 4)); // 3
console.log(insertPosition([1,3,5,6], 2)); // 1
console.log(insertPosition([1,3,6,7], 8)); // 4
console.log(insertPosition([1,3,5,6], 0)); // 0