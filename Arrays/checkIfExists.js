// Given an array of integers check if two numbers m and n exist where m = n * 2

// Approach 1
// const checkIfExist = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let num = array[i];
//     for (let j = 0; j < array.length; j++) {
//       if (j !== i) {
//         if (array[j] === num * 2) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// };

// Approach 2
var checkIfExist = function(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] * 2) || set.has(arr[i] / 2))  {
      return true;
    }
    set.add(arr[i]);
  }  
  return false;
};

console.log(checkIfExist([7,1,11,14])) // true
console.log(checkIfExist([3,1,7,11])) // false
console.log(checkIfExist([2,3,7,8])) // false
console.log(checkIfExist([1, 2, 3, 6])) // true