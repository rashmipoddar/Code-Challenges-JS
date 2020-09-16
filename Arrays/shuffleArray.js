// Given an array, return a modified array that consists of values randomly shuffled from the original array

// Approach 1
const shuffleArray = (numbers) => {
  let modified = [];
  while (numbers.length > 0) {
    let randomIndex = getRandomNumber(0, numbers.length - 1);
    modified.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1); 
  }
  return modified;
}

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Approach 2
const shuffle = (numbers) => {
  return numbers.sort((a,b) => Math.random() > 0.5 ? 1 : -1);
}

console.log(shuffleArray([1,2,3,4,5])); 
console.log(shuffle([1,2,3,4,5])); 