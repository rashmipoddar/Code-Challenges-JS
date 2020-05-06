// Implementation of indexOf for string

let stringIndex = (letters, word) => {

  if (word.length === 0) {
    return -1;
  };

  if (word.length > letters.length) {
    return -1;
  }
  
  let indexes = [];

  for (let i = 0; i < letters.length; i++) {
    if (word[0] === letters[i]) {
      indexes.push(i);
    }
  }
  
  if (indexes.length === 0) {
    return -1;
  }
  
  let index;
  for (let i = 0; i < indexes.length; i++) {
    let firstCharIndex = indexes[i];
    index = firstCharIndex;
    for (let j = 0; j < word.length; j++) {
      if (word[j] === letters[firstCharIndex]) {
        firstCharIndex += 1;
        if (j === word.length - 1) {
          return index;
        }
      } else {
        break;
      } 
    }
  }
  return -1;
};

console.log(stringIndex('hello', 'll')); // 2
console.log(stringIndex('aaaaa', 'bba')); // -1
console.log(stringIndex('around', '')); // -1
console.log(stringIndex('mississippi', 'issipi')); // -1
console.log(stringIndex('mississippi', 'issip')); // 4
