// Given a string and a char count the no of char present in the string

const countChar = (string, letter) => {
  let count = 0;
  if (string === '') {
    return count;
  }
  let char = string.slice(0,1);
  if (char === letter) {
    count++;
  } 
  string = string.slice(1);
  return count + countChar(string, letter);
}

let string = 'Good night, good night! parting is such sweet sorrow';
console.log(countChar(string, 'o')); // 6
console.log(countChar(string, 'w')); // 2
console.log(countChar(string, 'c')); // 1
console.log(countChar(string, 'b')); // 0

// With proper tail calls
// Proper tail call means inside the recursion function there is a return followed by a call to the main function
// For eg, in the above function we return count + countChar(string, letter)
// but in the below function we return countChar(string, letter, count);
// All recursion functions cannot be written using proper tail calls
const countCharPTC = (string, letter, count) => {
  if (string === '') {
    return count;
  }
  let char = string.slice(0,1);
  if (char === letter) {
    count++;
  } 
  string = string.slice(1);
  return countChar(string, letter, count);
}

console.log(countCharPTC(string, 'o', 0)); // 6
console.log(countCharPTC(string, 'w', 0)); // 2
console.log(countCharPTC(string, 'c', 0)); // 1
console.log(countCharPTC(string, 'b', 0)); // 0



