let isAnagram = (string1, string2) => {
  let letterCount = {};
  for (char of string1) {
    if (char in letterCount) {
      letterCount[char] += 1;
    } else {
      letterCount[char] = 1;
    }
  }
  for (char of string2) {
    if (char in letterCount) {
      if (letterCount[char] < 0) {
        return false;
      } else {
        letterCount[char] -= 1;
      }
    } else {
      return false;
    }
  }
  for (key in letterCount) {
    if (letterCount[key] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('cat', 'bat')); // false