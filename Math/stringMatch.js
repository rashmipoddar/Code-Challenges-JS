// Given a string that only contains 'I' and "D", return an array,A containing [0,1,2....n]
// in any combination that meets the following condition:
// If string[i] == "I", then A[i] < A[i+1]
// If string[i] == "D", then A[i] > A[i+1]

const stringMatch = (string) => {
  let result = [];
  let low = 0;
  let high = string.length;
  for (let i = 0; i <= string.length; i++) {
    if (string.charAt(i) === 'I') {
      result.push(low);
      low++;
    } else {
      result.push(high);
      high--;
    }
  };
  return result;
};

console.log(stringMatch('IDID')); // [0,4,1,3,2]
console.log(stringMatch('III')); // [0,1,2,3]
console.log(stringMatch('DDI')); // [3,2,0,1]
console.log(stringMatch('DDDI')); // [4,3,2,0,1]