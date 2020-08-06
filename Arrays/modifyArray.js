// Given an array create a new array using the array 
// such that the new array [i] = array[i-1] + array[i] + array[i+1]
// If array[i-1] or array[i+1] does not exist replace it with 0

const modifyArray = (numbers, count) => {
  let modified = [];
  for (let i = 0; i < count; i++) {
    let firstNumber;
    let secondNumber = numbers[i];
    let thirdNumber;
    if (i - 1 < 0) {
      firstNumber = 0;
    } else {
      firstNumber = numbers[i - 1];
    }
    if (i + 1 > count - 1) {
      thirdNumber = 0;
    } else {
      thirdNumber = numbers[i + 1];
    }
    let sum = firstNumber + secondNumber + thirdNumber;
    modified.push(sum);
  }
  return modified;
}

console.log(modifyArray([4,0,1,-2,3], 5)); // [4,5,-1,2,1]