// Given a pattern and a string find if the string follows the pattern

const wordPatternMatch = (pattern, string) => {
  let words = string.split(' ');
  if (pattern.length !== words.length) {
    return false;
  };

  let charMatching = {};
  let wordMatching = {};
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern.charAt(i);
    if (!charMatching[char]) {
      if (wordMatching[words[i]]) {
        return false;
      } else {
        wordMatching[words[i]] = char;
      };
      charMatching[char] = words[i];
    } else {
      if (charMatching[char] !== words[i]) {
        return false;
      }
    }
  };
  return true;
};

console.log(wordPatternMatch('abba', 'dog cat cat dog')); // true
console.log(wordPatternMatch('abba','dog cat cat fish')); // false
console.log(wordPatternMatch('aaaa','dog cat cat dog')); // false
console.log(wordPatternMatch('abba', 'dog dog dog dog')); // false