// Given an array return true if it contains duplicates

containsDuplicate = (array) => {
  return array.length > new Set(array).size;
}

console.log(containsDuplicate([1,2,1,3]));
console.log(containsDuplicate([1,2,3]));
console.log(containsDuplicate([]));