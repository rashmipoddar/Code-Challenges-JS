// Given a positive number repeatedly add its digits until the result has only 1 digit

// Method 1
const addDigits = (num) => {
  while (num > 9) {
    num = [...num + ''];
    let sum = 0; 
    for (let i = 0; i < num.length; i++) {
      sum += Number(num[i]);
    }
    num = sum;
  }
  return num;
}

// Method 2
// const addDigits = (num) => {
//   if (num > 0) {
//     return num % 9 || 9;
//   } 
//   return 0;
// }

console.log(addDigits(38)) // 2
console.log(addDigits(90)) // 9
console.log(addDigits(0)) // 0