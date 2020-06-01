// Given two strings, original and shuffled where shuffled is the original string 
// shuffled randomly and added one letter randomly at a random position.
// Return the extra letter added to shuffled.

const findTheDifference = function(original, shuffled) {
  let alphaCount = {};
  for (let i = 0; i < shuffled.length; i++) {
    if (!alphaCount[shuffled[i]]) {
      alphaCount[shuffled[i]] = 1;
    } else {
      alphaCount[shuffled[i]] += 1; 
    }        
  }
  
  for (let i = 0; i < original.length; i++) {
    alphaCount[original[i]] -= 1;
  }
  
  for (let alphabet in alphaCount) {
    if (alphaCount[alphabet] === 1) {
      return alphabet;
    }
  }
};

console.log(findTheDifference('hello', 'ollhef')) // f
console.log(findTheDifference('world', 'worldt')) // t