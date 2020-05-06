let longestCommonPrefix = (strs) => {
  let common = '';
  if (strs.length === 0) {
    return common;
  };
  
  let firstWord = strs[0];

  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== firstWord[i]) {
        return common;   
      } 
    }
    common += firstWord[i];
  }
  return common;  
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // fl
console.log(longestCommonPrefix(['apple', 'ball', 'cat'])); // ''
console.log(longestCommonPrefix(['abs', 'css'])); // ''
console.log(longestCommonPrefix(['a'])); // a