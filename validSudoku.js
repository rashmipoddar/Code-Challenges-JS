const validSudoku = board => {
  for (let i = 0; i < board.length; i++) {
    rowNumCount = {};
    row = board[i];
    // console.log(row);
    for (let j = 0; j < row.length; j++) {
      if (row[j] !== '.') {
        if (rowNumCount[row[j]] === undefined) {
          rowNumCount[row[j]] = 1
        } else {
          return false;
        }
      }  
    }  
  }

  for (let i = 0; i < board.length; i++) {
    let columnNumCount = {}; 
    for (let j = 0; j < board.length; j++) {
      let columnNum = board[j][i];
      if (columnNum !== '.') {
        if (columnNumCount[columnNum] === undefined) {
          columnNumCount[columnNum] = 1;
        } else {
          return false;
        }
      }
    }
  }

  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      let grid = [];
      let gridNumCount = {}
      for (let k = i; k < i+3; k++) {
        for (let l = j; l < j+3; l++ ) {
          gridNumber = board[k][l];
          grid.push(gridNumber);
        }
      }
      // console.log('Grid :', grid);
      for (let m = 0; m < grid.length; m++) {
        if (grid[m] != '.') {
          if (gridNumCount[grid[m]] === undefined) {
            gridNumCount[grid[m]] = 1
          } else {
            return false;
          }
        }
      }
    }
  }

  return true;

} 

board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

board2 = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

console.log(validSudoku(board)); // true
console.log(validSudoku(board2)); // false