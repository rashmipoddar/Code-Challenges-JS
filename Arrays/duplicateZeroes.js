// Given a fixed length array numbers, duplicate each occurence of zero,
// shifting the remaining elemnents to the right.
// Modify the array in place and do not return anything from the function.
// The array elements beyond the fixed length of the original array are not included.

// const duplicateZeros = (numbers) => {
//   const len = numbers.length;
//   for (let i = 0; i < len; i++) {
//     if (numbers[i] === 0) {
//       numbers.splice(i, 0, 0);
//       i++;
//     }
//   }

//   numbers.length = len;

// };

const duplicateZeros = (numbers) => {
  let length = numbers.length;
  for (let i = 0; i < length; i++) {
    if (numbers[i] === 0) {
      for (let j = numbers.length - 1; j > i; j--) {
        numbers[j] = numbers[j - 1];
      }
      i++;
    }
  }
}

let numbers1 = [1,0,2,3,0,4,5,0];
duplicateZeros(numbers1);
console.log(numbers1);
// [1,0,0,2,3,0,0,4]

let numbers2 = [1,2,3];
duplicateZeros(numbers2);
console.log(numbers2);
// [1,2,3]

let numbers3 = [8,4,5,0,0,0,0,7];
duplicateZeros(numbers3);
console.log(numbers3);
// [8,4,5,0,0,0,0,0]
