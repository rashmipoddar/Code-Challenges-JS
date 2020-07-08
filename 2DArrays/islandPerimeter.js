// Given a map in the form of a 2D grid where 1 represents land and 0 represents water,
// find the perimeter of the island.
// The grid is surrounded by water and there is exactly one island. 
// The island does not have lakes (water inside not connected to the water around the island)
// One cell is a square with side length of 1.  

var islandPerimeter = function (grid) {
  let perimeter = 0;
  let rowLength = grid.length;
  let colLength = grid[0].length;
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      let cell = grid[i][j];
      if (cell === 0) {
        continue;
      }
      // check top
      if (i === 0) {
        perimeter += 1;
      } else {
        top = grid[i - 1][j];
        if (top === 0) {
          perimeter += 1;
        }
      }
      // check bottom
      if (i === rowLength - 1) {
        perimeter += 1;
      } else {
        bottom = grid[i + 1][j];
        if (bottom === 0) {
          perimeter += 1;
        }
      }
      // check left
      if (j === 0) {
        perimeter += 1;
      } else {
        left = grid[i][j - 1];
        if (left === 0) {
          perimeter += 1;
        }
      }
      // check right
      if (j === grid[i].length - 1) {
        perimeter += 1;
      } else {
        right = grid[i][j + 1];
        if (right === 0) {
          perimeter += 1;
        }
      }
    }
  }
  return perimeter;
}

let array = [
  [0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]
];

let array2 = [[1,1]];

console.log(islandPerimeter(array)); // 16
console.log(islandPerimeter(array2)); // 6