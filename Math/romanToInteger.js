// Given a number in Roman format convert it to an integer

const romanToInteger = (string) => {
  let number = 0;
  let conversionValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  for (let i = 0; i < string.length; i++) {
    let firstChar = string.charAt(i);
    let secondChar = string.charAt(i + 1);
    if (conversionValues[firstChar] < conversionValues[secondChar]) {
      number += conversionValues[secondChar] - conversionValues[firstChar];
      i++;
    } else {
      number += conversionValues[firstChar];
    }
  }
  return number;
};

console.log(romanToInteger('III')); // 3
console.log(romanToInteger('IV')); // 4
console.log(romanToInteger('IX')); // 9
console.log(romanToInteger('LVIII')); // 58
console.log(romanToInteger('MCMXCIV')); // 1994