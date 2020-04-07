// Return if a given string is a palindrome.
// A string is a palindrome if the reverse of the string is same as string
// Don't consider the empty spaces and special characters

// const isPalindrome = (s) => {
//   let validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
//   let newString = '';
//   for (let i = 0; i < s.length; i++) {  
//     if (validChars.includes(s[i].toLowerCase())) {
//       newString += s[i].toLowerCase();
//     }
//   }
//   return newString === newString.split('').reverse().join('')
  
// };

// const isPalindrome = s => {
//   s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== s[s.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

const isPalindrome = s => {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return s === s.split('').reverse().join('')
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('A race car'))
