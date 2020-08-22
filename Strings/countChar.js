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
