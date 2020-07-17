// Write a function powerOfNumber(x, n) which returns x raised to power n (x^n).

const powerOfNumber = (x, n) => {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return x;
  } else if (n === -1) {
    return 1 / x;
  } else if (n % 2 === 0) {
    const m = powerOfNumber(x, n / 2);
    return m * m;
  }
  else return x * powerOfNumber(x, n - 1);
};

console.log(powerOfNumber(2.00000, 10)); // 1024
console.log(powerOfNumber(2.10000, 3)); // 9.261000000000001
console.log(powerOfNumber(2.00000, -2)); // 0.25
console.log(powerOfNumber(2.00000, -2147483648)); // 0