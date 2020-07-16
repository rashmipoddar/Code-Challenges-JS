// Given an input string, reverse the string word by word.
// The string should not contain multiple spaces between words or a trailing space.


const reverseWords = (string) => {
  let stringArray = string.split(' ');
  let reverseArray = [];
  for (let i = stringArray.length - 1; i >= 0; i--) {
    if (stringArray[i] !== '') {
      reverseArray.push(stringArray[i]);
    }
  }
  return reverseArray.join(' ');

};

console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world!  ")); // "world! hello"
console.log(reverseWords("a good   example")); // "example good a"