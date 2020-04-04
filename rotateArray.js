// Function arguments - An array and k a non negative number
// Rotate the array to right by k steps

const rotate = (nums, k) => {
  let loop = 1;
  while (loop <= k){
    nums.unshift(nums.pop())
    loop += 1;
  }
  // console.log(nums);
  return nums;
};

// The time complexity is 0(k * n)
// The while loop runs k times 
// Inside while loop, we are calling unshift to add an element at 0 index of array. So time complexity for that is 0(n)

console.log(rotate([1,2,3,4,5,6,7], 3)) // [5,6,7,1,2,3,4]
console.log(rotate([7,6,12,14,17], 4)) // [6,12,14,17,7]