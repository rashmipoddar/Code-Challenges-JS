// The function must return an array of n Fibonacci numbers starting with 0 as the first Fibonacci number.

function fibonacci(n) {
	let results = [0, 1];
	if (n === 0) {
		return [];
	}
	if (n === 1) {
		return [0];
	}
	let count = 2;
	while (count !== n) {
		results.push(results[count - 1] + results[count - 2]);
		count += 1;
	}

	return results;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(6));
console.log(fibonacci(10));
console.log(fibonacci(15));