// Given an array return the number whose first second occurence has the minimal index. If there are no duplicates return -1

function firstDuplicate(a) {
  let numCount = {};
  for (let num of a) {
    if (!numCount[num]) {
      numCount[num] = 1;
    } else {
      return num;
    } 
  }
  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2])); // 3
console.log(firstDuplicate([2, 2])); // 2
console.log(firstDuplicate([2, 4, 3, 5, 1])); // -1
console.log(firstDuplicate([8, 4, 6, 2, 6, 4, 7, 9, 5, 8])); // 6
