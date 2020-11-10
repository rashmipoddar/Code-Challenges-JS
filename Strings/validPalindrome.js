// Given a string return if the string is palindrome. 
// You can at most remove one character from the string.

const validPalindrome = (string, count) => {
  if (count === undefined) {
    count = 0;
  };

  if (string.length === 1) {
    return true;
  };

  for (let i = 0; i < string.length / 2; i++) {
    if (string.charAt(i) === string.charAt(string.length - i - 1)) {
      continue;
    } else {
      if (count === 1) {
        return false;
      }
      return validPalindrome(string.slice(i, string.length - i - 1), count + 1) ||
        validPalindrome(string.slice(i + 1, string.length - i), count + 1);
    }
  }
  return true;
};

console.log(validPalindrome('aba')); // true 
console.log(validPalindrome('abca')); // true
console.log(validPalindrome('abc')); // false