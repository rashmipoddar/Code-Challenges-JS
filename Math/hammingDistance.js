// Given two integers calculate the hamming distance.
// The hamming distance between 2 integers is the no of positions at which the corresponding bits are different.

const hammingDistance = (x, y) => {
  let count = 0;
  let binaryX = x.toString(2);
  let binaryY = y.toString(2);
  
  if (binaryX.length > binaryY.length) {
    let difference = binaryX.length - binaryY.length;
    for (let i = 0; i < difference; i++) {
      binaryY = '0' + binaryY;
    }
  }
  
  if (binaryY.length > binaryX.length) {
    let difference = binaryY.length - binaryX.length;
    for (let i = 0; i < difference; i++) {
      binaryX = '0' + binaryX;
    }
  }
  
  for (let i = 0; i < binaryX.length; i++) {
    if (binaryX[i] !== binaryY[i]) {
      count++;
    }
  }
  return count;
};

console.log(hammingDistance(1,4)); // 2
console.log(hammingDistance(680142203, 1111953568)); // 19

