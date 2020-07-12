// Given an array of distinct integers return all possible subsets (power set).
// The solution set should not contain duplicate subsets.

// Approach 1 : Iterative
const subsets = (nums) => {
  let result = [[]];
  for (let num of nums) {
    let resultLength = result.length;
    for (let i = 0; i < resultLength; i++) {
      let copy = [...result[i]];
      copy.push(num);
      result.push(copy);
    }
  }
  return result;
};

console.log(subsets([1,2,3])); // [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]