// There are 8 prison cells, in a row, and each cell is either occupied or vacant.
// Each day whether the cell is occupied or vacant changes according to the the following rules:
// If a cell has two adjacent cells that are both occupied or vacant then the cell becomes occupied
// Otherwise, it becomes vacant.
// The first and last cells cannot have two adjacent neighbors.
// If the ith cell is occupied, cells[i] === 1
// If the ith cell is vacant, cells[i] === 0
// Given the initial state of the cell, return the state of the prison after N days

const prisonAfterNDays = (cells, N) => {
  let prisonValues = {};
  let patternSize = 0;
  let patternFound = false;
  for (let i = 0; i < N; i++) {
    let nextDayValue = conversion(cells);
    let value = nextDayValue.join('');
    if (Object.values(prisonValues).indexOf(value) === -1) {
      patternSize++;
      prisonValues[patternSize] = value;
    } else {
      patternFound = true;
      break;
    }
    cells = nextDayValue;
  }
  if (patternFound) {
    let finalValue;
    N = N % patternSize;
    if (N === 0) {
      finalValue = prisonValues[patternSize];
    } else {
      finalValue = prisonValues[N];
    }
    return finalValue.split('').map(Number);
  } else {
    return cells;
  }
};

const conversion = (cells) => {
  let result = new Array(8).fill(0);
  for (let i = 1; i < cells.length - 1; i++) {
    if (cells[i - 1] === cells[i + 1]) {
      result[i] = 1;
    }
  }
  return result;
};

console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 7)); // [0,0,1,1,0,0,0,0]
console.log(prisonAfterNDays([1,0,0,1,0,0,1,0], 1000000000)); // [0,0,1,1,1,1,1,0]
console.log(prisonAfterNDays([1,1,0,1,1,0,1,1], 6)); // [0,0,1,0,0,1,0,0] 
console.log(prisonAfterNDays([0,0,0,1,1,0,1,0], 574)) // [0,0,0,1,1,0,1,0]