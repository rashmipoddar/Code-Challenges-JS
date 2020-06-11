// Given two strings check if substring is a subsequence of original
// A subsequence of a string is a new string which is formed from the original string 
// by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
// (ie, "ace" is a subsequence of "abcde" while "aec" is not).

const isSubsequence = (substring, original) => {
  if (substring === "") {
    return true;
  }
  let index = 0;
  for (let i = 0; i < original.length; i++) { 
    if (substring[index] === original[i]) {
      index++;
    } 
    if (index === substring.length) {
      return true;
    }
  }
  return false;
};

console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false
console.log(isSubsequence('b', 'c')); // false
console.log(isSubsequence('', 'cas')); // true
console.log(isSubsequence('abc', 'ahcgdb')); // false