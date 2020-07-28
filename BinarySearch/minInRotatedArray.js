// An array sorted in ascending order, is rotated at some unknown index beforehand.
// i.e [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]
// Find the minimum element
// Assume that no duplicates exist in the array.

const minInRotatedArray = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }
  let start = 0;
  let end = nums.length - 1;
  if (nums[end] > nums[start]) {
    return nums[start];
  }
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }
    if (nums[mid] > nums[0]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};

console.log(minInRotatedArray([1])); // 1
console.log(minInRotatedArray([1,2])); // 1
console.log(minInRotatedArray([2,1])); // 1
console.log(minInRotatedArray([3,4,5,1,2])); // 1
console.log(minInRotatedArray([4,5,1,2,3])); // 1
