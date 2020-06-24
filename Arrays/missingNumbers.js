// Given an array of integers where each element is between and including 1 and length of array 
// find the numbers that are not present in the array
// Some elements appear twice and some appear once.

const missingNumbers = (nums) => {
  let missing = [];
  let set = new Set(nums);
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      missing.push(i);
    }
  }
  return missing;
  
};

console.log(missingNumbers([4,3,2,7,8,2,3,1])) // [5,6]
console.log(missingNumbers([])); // []