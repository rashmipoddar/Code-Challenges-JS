// It takes n steps to reach the top of a staircase. 
// Each time you can climb either 1 or 2 steps.
// In how many distinct ways can you climb to the top

// Approach 1 DP - Bottom to top 
const climbingStairs = (n) => {
  let steps = [0, 1, 2];    
  let count = 3;
  while (count <= n) {
    steps.push(steps[count-1] + steps[count-2]);
    count += 1
  }
    
  return steps[n];
}


console.log(climbingStairs(2)); // 2
console.log(climbingStairs(3)); // 3
console.log(climbingStairs(5)); // 8
console.log(climbingStairs(10)); // 89