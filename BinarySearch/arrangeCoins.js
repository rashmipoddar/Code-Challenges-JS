// We have n coins which we want to arrange in a staircase shape
// where every kth row must have k coins.
// Given n find the total no of full staircase rows that can be formed. 

// Approach 1 : 
// const arrangeCoins = (n) => {
//   if (n === 0) {
//     return 0;
//   }
//   let coins = n;
//   let count = 1;
//   while (coins >= count) {
//     coins = coins - count;
//     if (coins >= count + 1) {
//       count += 1;    
//     }
//   }
//   return count;
// };

// Approach 2 : Binary Search
const arrangeCoins = (n) => {
  let start = 0;
  let end = n;
  while (start <= end) {
    let mid = Math.floor((start + end)/2);
    let k = (mid * (mid + 1) )/ 2;
    
    if (k === n) {
      return mid;
    }
    if (k < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }     
  }
  return end;
};

console.log(arrangeCoins(0)); // 0
console.log(arrangeCoins(1)); // 1
console.log(arrangeCoins(5)); // 2
console.log(arrangeCoins(8)); // 3
console.log(arrangeCoins(3)); // 2
