// Given a string find the length of the longest substring without repeating characters.

const longestUniqueSubstringLength = (string) => {
  let maxLength = 0;
  let end = 0;
  let start = 0;
  let letters = new Set();

  while (end < string.length) {
    let char = string.charAt(end);
    if (letters.has(char)) {
      letters.delete(string.charAt(start));
      start = start + 1;
    } else {
      letters.add(char);
      let length = end - start + 1;
      if (length > maxLength) {
        maxLength = length;
      }
      end = end + 1;
    }
  }
  return maxLength;
};

console.log(longestUniqueSubstringLength('abcabcbb')); // 3
console.log(longestUniqueSubstringLength('pwwkew')); // 3
console.log(longestUniqueSubstringLength('bbbbb')); // 1
console.log(longestUniqueSubstringLength('')); // 0