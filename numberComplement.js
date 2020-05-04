// Given a positive integer return its complement. A complement for a number is the bit reprensentation of the number flipped

let findComplement = (num) => {
  let binary = Number(num).toString(2);
  let complement = '';
  for (let bit of binary) {
    if (bit === '0') {
      complement += '1';
    } else {
      complement += '0';
    }
  }
  return parseInt(complement, 2);
  
};

console.log(findComplement(5)) // 2
console.log(findComplement(1)) // 0
