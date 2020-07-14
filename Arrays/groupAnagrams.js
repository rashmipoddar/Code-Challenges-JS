// Given an array of strings, group anagrams together.
// Anagrams are words that contain the same letters
// The order of the output does not matter.

const groupAnagrams = (strings) => {
  let anagramObject = {};
  for (let i = 0; i < strings.length; i++) {
    let sortedString = strings[i].split('').sort().join('');
    if (!anagramObject[sortedString]) {
      anagramObject[sortedString] = [strings[i]];
    } else {
      anagramObject[sortedString].push(strings[i]);
    }
  }
  return Object.values(anagramObject);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["ate","eat","tea"], ["nat","tan"], ["bat"]]