// Given an array of numbers and a limit, implement a function that finds two items wieghts
// whose weight equals the limit. The function should return the indices of the item weights
// such that i > j. If such a pair does not exist return an empty array.

const getIndicesOfItemWeights = (array, limit) => {
  if (array.length < 2) {
    return [];
  }
  let numbersHash = {};
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    let complementIndex = numbersHash[limit - value];
    if (complementIndex !== undefined) {
      return [i, complementIndex];
    } else {
      numbersHash[value] = i;
    }
  }
}

console.log(getIndicesOfItemWeights([4,6,10,15,16], 21)); // [3,1]
console.log(getIndicesOfItemWeights([4,4,1], 5)); // [2,1]
