// Given an array of numbers, return the smallest positive number not included in array.  


// Approach 1: 
// const smallestPositiveNo = (nums) => {
  
//   let positiveNums = nums.filter(num => num > 0);  
//   positiveNums.sort((a,b) => a-b);
  
//   let set = new Set(positiveNums);
  
//   let i = 1;
//   while (set.has(i)) {
//     i += 1;
//   }
  
//   return i;
// }

// Approach 2 (for loop):
// const smallestPositiveNo = (nums) => {
//   if (!nums.length) {
//     return 1;
//   }

//   nums.sort((a,b) => a - b);

//   let i = 0;
//   while (nums[i] < 1) {
//     i += 1;
//   }
//   if (nums[i] !== 1) {
//     return 1;
//   }

//   let j;
//   for (j = i; j < nums.length - 1; j++) {
//     if (nums[j + 1] - nums[j] === 1 || nums[j + 1] === nums[j]) {
//       continue;
//     } else {
//       break;
//     }
//   }

//   return nums[j] + 1;
// }

// Approach 2 (while loop):

const smallestPositiveNo = (nums) => {
  if (!nums.length) {
    return 1;
  }

  nums.sort((a,b) => a - b);

  let i = 0;
  while (nums[i] < 1) {
    i += 1;
  }
  if (nums[i] !== 1) {
    return 1;
  }

  while (i < nums.length - 1) {
    if (nums[i] - nums[i + 1] === -1 || nums[i] === nums[i + 1]) {
      i += 1;
    } else {
      break;
    }
  }

  return nums[i] + 1;
}

console.log(smallestPositiveNo([1,2,3])); // 4
console.log(smallestPositiveNo([-3, -1])); // 1
console.log(smallestPositiveNo([1, 3, 6, 4, 1, 2])); // 5
console.log(smallestPositiveNo([3,4,-1,1])) // 2
console.log(smallestPositiveNo([[7,8,9,11,12]])) // 1