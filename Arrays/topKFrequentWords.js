// Given an array of words return the k most frequent words
// The return value should be sorted in descending order according to the frequency
// If two words have the same frequency then the word with lower alphabetical order comes first

const topKFrequentWords = (words, k) => {
  let wordCount = {};
  for (let word of words) {
    if (!wordCount[word]) {
      wordCount[word] = 1;
    } else {
      wordCount[word] += 1;
    }
  }

  let wordsArray = Object.entries(wordCount);
  wordsArray.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0] > b[0] ? 1 : -1;
    } else {
      return b[1] - a[1];
    }
  });
  return wordsArray.slice(0, k).map(word => word[0]);

};

console.log(topKFrequentWords(["i", "love", "leetcode", "i", "love", "coding"], 2)); // ["i", "love"]
console.log(topKFrequentWords(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4)); // ["the", "is", "sunny", "day"]