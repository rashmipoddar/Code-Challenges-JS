// In a town with N people a judge may exist. 
// The judge has the following two traits
// The judge trusts nobody
// Everybody except the judge, trusts the judge
// Trust is an array of pairs trust[i] = [a, b] representing that the person labelled 'a' trusts the person labelled 'b'.
// Return the judge else return -1

// Approach 1

// let findJudge = (N, trust) => {
//   if (N === 1) {
//     return 1;
//   }
  
//   let trustingPeople = {};
//   let set = new Set();
  
//   for (let i = 0; i < trust.length; i++) {
//     let trusted = trust[i][1];
//     set.add(trust[i][0]);
//     if (!trustingPeople[trusted]) {
//       trustingPeople[trusted] = [trust[i][0]];
//     } else {
//       trustingPeople[trusted].push(trust[i][0])
//     }
//   }
  
//   if (set.size === N) {
//     return -1;
//   }
  
//   for (let key in trustingPeople) {
//     if (trustingPeople[key].length === N-1 ) {
//       return key;
//     }
//   }
//   return -1
// };

// Approach 2

let findJudge = (N, trust) => {
  const tracking = new Array(N + 1).fill(0);
  
  for (let pair of trust) {
    let first = pair[0];
    let second = pair[1];
    tracking[first] -= 1;
    tracking[second] += 1;
  }
  
  for (let i = 1; i < tracking.length; i++) {
    if (tracking[i] === N - 1)  {
      return i;
    }
  }  
  return -1
}

console.log(findJudge(3, [[1,3],[2,3]])); // 3
console.log(findJudge(3, [[1,3],[2,3],[3,1]])); // -1
console.log(findJudge(3, [[1,2],[2,3]])); // -1
console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]])); // 3
console.log(findJudge(1, [])); // 1