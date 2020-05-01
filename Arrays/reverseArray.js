// Given an array reverse it in place without creating a new array.

var reverseArray = function(array) {
  let limit = Math.floor(array.length / 2);
  for (let i = 0; i < limit; i++) {
    let index = array.length - 1 - i;
    let temp = array[index];
    array[index] = array[i];
    array[i] = temp;
  }
};

array = ['h', 'e', 'l', 'l', 'o'];
reverseArray(array);
console.log(array);

array2 = ['H', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd'];
reverseArray(array2);
console.log(array2);
