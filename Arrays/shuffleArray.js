// Given an array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

const shuffleArray = (nums, n) => {
  let shuffledArray = [];
  for (let i = 0; i < n; i++) {
    shuffledArray.push(nums[i]);
    shuffledArray.push(nums[i + n]);
  }
  return shuffledArray;
};

console.log(shuffleArray([2,5,1,3,4,7], 3)); // [2,3,5,4,1,7]
console.log(shuffleArray([1,2,3,4,4,3,2,1], 4)); // [1,4,2,3,3,2,4,1]
console.log(shuffleArray([1,1,2,2], 2)); // [1,2,1,2]
