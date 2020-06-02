// Given a list of sorted characters, letters find the smallest element in the list greater than a given target.
// Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

// Approach 1
const nextGreaterLetter = (letters, target) => {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target) {
      return letters[i];
    }
  }
  return letters[0];  
}

console.log(nextGreaterLetter(["c", "f", "j"], "a")) // c
console.log(nextGreaterLetter(["c", "f", "j"], "c")); // f
console.log(nextGreaterLetter(["c", "f", "j"], "d")); // f
console.log(nextGreaterLetter(["c", "f", "j"], "g")); // j
console.log(nextGreaterLetter(["c", "f", "j"], "j")); // c
console.log(nextGreaterLetter(["c", "f", "j"], "k")); // c
console.log(nextGreaterLetter(["e","e","e","e","e","e","n","n","n","n"], "e")); // n
console.log(nextGreaterLetter());