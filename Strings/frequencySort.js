// Sort the given string in decreasing order based on the frequency of characters.

// Approach 1
// const frequencySort = (string) => {
//   let charCount = {};
//   let maxCount = 1;
//   let result = '';
//   for (let i = 0; i < string.length; i++) {
//     if (!charCount[string[i]]) {
//       charCount[string[i]] = 1;
//     } else {
//       charCount[string[i]] += 1;
//       if (charCount[string[i]] > maxCount) {
//         maxCount = charCount[s[i]];
//       }
//     }        
//   }
  
//   for (let i = maxCount; i >= 1; i--) {
//     for (let key in charCount){
//       if (charCount[key] === i) {
//         for (let j = 1; j <= i; j++) {
//           result += key;
//         }
//       }     
//     }    
//   }
//   return result;
// };

// Approach 2:
// const frequencySort = (string) => {
//   let charCount = {};
//   let result = '';
//   for (let i = 0; i < string.length; i++) {
//     if (!charCount[string[i]]) {
//       charCount[string[i]] = 1;
//     } else {
//       charCount[string[i]] += 1;
//     }        
//   }
  
//   const sorted = Object.entries(charCount).sort((a, b) => b[1] - a[1]);
//   for (let i = 0; i < sorted.length; i++) {
//     while (sorted[i][1] !== 0) {
//       result += sorted[i][0];
//       sorted[i][1] -= 1;
//     }
//   }
//   return result;
    
// }

// Approach 3 - Using a Map:

const frequencySort = (string) => {
  let map = new Map();
  for (let char of string) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  
  let array = [...map.entries()];
  array.sort((a,b) => b[1] - a[1]);
  let result = array.map(char => char[0].repeat(char[1]));
  return result.join('');
}

console.log(frequencySort('tree')); // 'eert' or 'eetr'
console.log(frequencySort('bababa')) // 'aaabbb' or 'bbbaaa'
console.log(frequencySort('Aabb')) // 'bbAa' or 'bbaA'
