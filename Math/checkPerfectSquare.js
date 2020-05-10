// Check if the provided positive integer is a perfect square

// Addition of first n odd numbers is always a perfect square

var checkPerfectSquare = (num) => {
  let i = 1;
  let sum = 0;
  while (sum < num) {
    sum += i;
    if (sum === num) {
      return true;
    }
    i += 2;
  }
  return false;
};

// Aternate approach - Binary search

// let checkPerfectSquare = (num) => {
//   if (num < 2) {
//     return num === 1;
//   }
//   let start = 2;
//   let end = num;
  
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     let squared = mid * mid;
//     if (squared === num) {
//       return true
//     } else if (squared > num) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return false;
// };


console.log(checkPerfectSquare(49)); // true
console.log(checkPerfectSquare(51)); // false