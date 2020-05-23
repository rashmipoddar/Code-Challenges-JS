// Sort the given string in decreasing order based on the frequency of characters.

const frequencySort = (string) => {
  let charCount = {};
  let maxCount = 1;
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!charCount[string[i]]) {
      charCount[string[i]] = 1;
    } else {
      charCount[string[i]] += 1;
      if (charCount[string[i]] > maxCount) {
        maxCount = charCount[s[i]];
      }
    }        
  }
  
  for (let i = maxCount; i >= 1; i--) {
    for (let key in charCount){
      if (charCount[key] === i) {
        for (let j = 1; j <= i; j++) {
          result += key;
        }
      }     
    }    
  }
  return result;
};

console.log(frequencySort('tree')); // 'eert' or 'eetr'
console.log(frequencySort('bababa')) // 'aaabbb' or 'bbbaaa'
console.log(frequencySort('Aabb')) // 'bbAa' or 'bbaA'