// Given a non-empty array of integers, return the k most frequent numbers.
// You can return the array in any order.

const topKFrequentNumbers = (nums, k) => {
  let numberCount = new Map();
  for (let num of nums) {
    numberCount.set(num, (numberCount.get(num) || 0) + 1);
  }

  let result = [];
  let entries = [...numberCount.entries()];
  entries.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    let pair = entries[i];
    result.push((pair[0]));
  }
  return result;
};

console.log(topKFrequentNumbers([1,1,1,2,2,3], 2)); // [1,2]
console.log(topKFrequentNumbers([1], 1)); // [1]
console.log(topKFrequentNumbers([4,1,-1,2,-1,2,3],2)) // [-1,2]