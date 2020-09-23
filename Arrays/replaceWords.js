// Given an array, a dictionary containing words and a sentence string, replace each word in the sentence with a word in the dictionary
// if the word in the sentence is formed by the word in the dictionary. 
// If a word can be replaced by two words use the word with the smallest length

const replaceWords = (dictionary, sentence) => {
  dictionary.sort((a, b) => a.length - b.length);
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < dictionary.length; j++) {
      let dictionaryWord = dictionary[j];
      if (word.startsWith(dictionaryWord)) {
        words[i] = dictionaryWord;
        break
      }
    }
  }
  return words.join(' ');
};

console.log(replaceWords(["cat","bat","rat"], "the cattle was rattled by the battery")); // "the cat was rat by the bat"
console.log(replaceWords(["catt","cat","bat", "rat"], "the cattle was rattled by the battery")); // "the cat was rat by the bat"
console.log(replaceWords(["a", "aa", "aaa", "aaaa"], "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa")); // "a a a a a a a a bbb baba a"
console.log(replaceWords(["a","b","c"], "aadsfasf absbs bbab cadsfafs")); // "a a b c"