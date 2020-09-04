// Given a string containing numbers and the signs + and * calculate the value of the given expression

const evaluateString = (string) => {
  if (string.charAt(0) === '*') {
    return 'invalid';
  }
  if (string.charAt(string.length - 1) === '+' || string.charAt(string.length - 1) === '*' ) {
    return 'invalid';
  }

  for (let i = 0; i < string.length - 1; i++) {
    if (string.charAt(i) === '*' || string.charAt(i) === '+') {
      if (string.charAt(i+1) === '*' || string.charAt(i+1) === '+') {
        return 'invalid';
      }
    }
  }

  let addDigits = string.split('+');
  let result = 0;
  for (let i = 0; i < addDigits.length; i++) {
    let digit = addDigits[i];
    if (digit.includes('*')) {
      let multiplyDigits = digit.split('*');
      let multiplicationResult = multiply(multiplyDigits);
      result += multiplicationResult;
    } else {
      result += Number(digit);
    }
  }
  return result;
}

const multiply = (array) => {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result *= Number(array[i]);
  }
  return result;
}

console.log(evaluateString('1+21')); // 22
console.log(evaluateString('3*12')); // 36
console.log(evaluateString('3+1+2*5*3+1*10')); // 44
console.log(evaluateString('+3')); // 3
console.log(evaluateString('1+21*5*2+7')); // 218
console.log(evaluateString('+1+4')); // 5
console.log(evaluateString('3**12')); // invalid
console.log(evaluateString('3*12+')); // invalid
console.log(evaluateString('3++1+2*5*3+1*10')); // invalid