// Given a sorted array consisting of integers all numbers appear twice expect one number which appears once.
// Return the element(number) that appears only once
// The runtime should be O(log n)

// Approach 1

let singleNonDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i+1]) {
      return nums[i];
    }
  }
}

// Approach 2

// let singleNonDuplicate = (nums) => {
    
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   let start = 0;
//   let end = nums.length - 1;
//   while (start < end) {
//     let mid = (start + end) / 2;
//     let midValue = nums[mid];
//     let startIndex;
//     let endIndex;

//     if (midValue === nums[mid + 1]) {
//       endIndex = mid + 1;
//       startIndex = mid
//     } else if (midValue === nums[mid - 1]) {
//       startIndex = mid - 1;
//       endIndex = mid;
//     } else {
//       return midValue;
//     }

//     let leftCount = startIndex - start;
//     let rightCount = end - endIndex;

//     if (leftCount === 1) {
//       return nums[start];
//     } 
//     if (rightCount === 1) {
//       return nums[end];
//     } 

//     if (leftCount % 2 !== 0) {
//       end = startIndex - 1;
//     } else {
//       start = endIndex + 1;
//     }
//   }

// };


console.log(singleNonDuplicate([3,3,7,7,10,11,11])); // 10
console.log(singleNonDuplicate([1])); // 1
console.log(singleNonDuplicate([5,5,7,10,10,13,13])); // 7
console.log(singleNonDuplicate([1,1,3,5,5])); // 3