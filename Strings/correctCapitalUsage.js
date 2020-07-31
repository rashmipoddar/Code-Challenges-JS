// Check if the capital usage is correct for the given word
// Capital usage is correct if all the letters are uppercase or all the letters are lowercase
// or if the first character in the word is uppercase and remaining characters are lowercase

const detectCapitalUsage = (word) => {
  if (word === word.toUpperCase()){
    return true;
  }
  if (word === word.toLowerCase()) {
    return true;
  }
  if (word === word[0] + word.substring(1).toLowerCase()) {
    return true;
  }
  return false;
};

console.log(detectCapitalUsage('USA')); // true
console.log(detectCapitalUsage('India')); // true
console.log(detectCapitalUsage('apple')); // true
console.log(detectCapitalUsage('bOw')); // false