// Given a 2D board and a word, check if the word exists in the board.
// The word can be constructed from letters of sequentially adjacent cell,
// where adjacent cells are those horizontally or vertically neighboring. 
// The same letter cell may not be used more than once.

const wordExists = (board, word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word.charAt(0) && search(board, i, j, 0, word)) {
        return true;
      }
    }
  }
  return false;
};

const search = (board, i, j, count, word) => {
  if (count === word.length) {
    return true;
  }

  if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== word.charAt(count)) {
    return false;
  }

  let temp = board[i][j];
  board[i][j] = ' ';
  let found = search(board, i - 1, j, count + 1, word) || 
              search(board, i + 1, j, count + 1, word) ||
              search(board, i, j - 1, count + 1, word) || 
              search(board, i, j + 1, count + 1, word)
  board[i][j] = temp;
  return found;
}

let board = [ 
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
console.log(wordExists(board, 'ABCCED')); // true
console.log(wordExists(board, 'SEE')); // true
console.log(wordExists(board, 'ABCB')); // false