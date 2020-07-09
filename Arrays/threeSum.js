// Given an array containing integers return all unique triplets that sum up to 0

const threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let currentNum = nums[i];
    let low = i + 1;
    let high = nums.length - 1;
    let sum = 0 - currentNum;

    while (low < high) {
      if (nums[low] + nums[high] === sum) {
        result.push([nums[i], nums[low], nums[high]]);
        while (low < high && nums[low] === nums[low + 1]) {
          low += 1;
        }
        while (low < high && nums[high] === nums[high - 1]) {
          high -= 1;
        }
        low += 1;
        high -= 1;
      } else if (nums[low] + nums[high] > sum) {
        high -= 1;
      } else {
        low += 1;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]