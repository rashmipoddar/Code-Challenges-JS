// Given an array modify the array in place such that all the zeroes move to the end without changing the order of the non zero numbers

let moveZeroes = (nums) => {
  let count = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      count ++;
    } else {
      i++
    }
  }
  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
};

let nums = [0,1,0,3,12] 
moveZeroes(nums);
console.log(nums);

let nums2 = [0,0,1];
moveZeroes(nums2);
console.log(nums2);