const sizeOfSudoku = 9;

function solveSudoku(board) {

  function checkRowColandSquare3x3(row, col, number) {

    for (let i = 0; i < sizeOfSudoku; i++) {
      if (board[row][i] === number || board[i][col] === number) {
        return false;
      }
    }

    const startRow3x3 = Math.floor(row / 3) * 3;
    const startCol3x3 = Math.floor(col / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow3x3 + i][startCol3x3 + j] === number) {
          return false;
        }
      }
    }

    return true;
  }

  function solve() {
    for (let row = 0; row < sizeOfSudoku; row++) {
      for (let col = 0; col < sizeOfSudoku; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= sizeOfSudoku; num++) {
            if (checkRowColandSquare3x3(row, col, num)) {
              board[row][col] = num;

              if (solve()) {
                return true;
              }

              board[row][col] = 0;
            }
          }

         
          return false;
        }
      }
    }

    return true;
  }

    return board;

}

const sudokuBoard = [
  [7, 0, 4, 8, 0, 0, 3, 0, 1],
  [8, 2, 0, 5, 0, 0, 0, 4, 0],
  [0, 0, 9, 4, 3, 0, 5, 0, 0],
  [3, 1, 0, 0, 0, 0, 8, 0, 7],
  [0, 8, 0, 0, 0, 0, 0, 1, 0],
  [9, 0, 7, 0, 0, 0, 0, 3, 2],
  [0, 0, 6, 0, 1, 5, 4, 0, 0],
  [0, 7, 0, 0, 0, 9, 0, 6, 5],
  [5, 0, 8, 0, 0, 2, 1, 0, 3]
];

console.log(solveSudoku(sudokuBoard));