// Write a function that returns whether two words are exactly one change apart.
// One permissible change for the word is:
// Insert one character anywhere in the word
// Removing one character from anywhere in the word
// Replacing one character

function isOneChangeApart(word1, word2) {
  let count = 0;
  let word1Len = word1.length;
  let word2Len = word2.length;
  if (word1Len === word2Len) {
    for (let i = 0; i < word1Len; i++) {
      if (word1[i] !== word2[i]) {
        count++;
      }
      if (count > 1) {
        return false;
      }
    }
    return true;
  } else if (word1Len - word2Len === 1) {
    for (let i = 0; i < word1Len; i++) {
      if (word1[i] !== word2[i]) {
        count++;
        word1 = word1.slice(0, i) + word1.slice(i + 1);
      }
      if (count > 1) {
        return false;
      }
    }
    return true;
  } else if (word2Len - word1Len === 1) {
    for (let i = 0; i < word2Len; i++) {
      if (word1[i] !== word2[i]) {
        count++;
        word2 = word2.slice(0, i) + word2.slice(i + 1);
      }
      if (count > 1) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}


console.log(isOneChangeApart("cat", "dog")) // false
console.log(isOneChangeApart("cat", "cut")) // true
console.log(isOneChangeApart("cat", "act")) // false
console.log(isOneChangeApart("cats", "at")) // false
console.log(isOneChangeApart("cat", "cats")) // true
console.log(isOneChangeApart("cat", "cast")) // true
console.log(isOneChangeApart("cat", "at")) // true
console.log(isOneChangeApart("cazt", "cezta")) // false

