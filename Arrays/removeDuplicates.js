// Given a sorted array remove duplicates from the array in place and return the length of array

let removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length - 1 ; i++) {
    if (nums[i] === nums[i+1]) {
      nums.splice(i+1, 1);
      i--;
    }
  }
  return nums.length; 
};

let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums)); // 5

let nums2 = [5,7,7]
console.log(removeDuplicates(nums2)); // 2