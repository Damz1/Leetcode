function isValidSudoku(board) {
  const seen = new Set();

  for (let i = 0; i < 9; i++) {
    const rowSeen = new Set();
    const colSeen = new Set();
    const boxSeen = new Set();

    for (let j = 0; j < 9; j++) {
      let rowVal = board[i][j];
      let colVal = board[j][i];
      let boxRow = Math.floor(i / 3) * 3;
      let boxCol = Math.floor(j / 3) * 3;
      let boxVal =
        board[boxRow + Math.floor(i % 3)][boxCol + Math.floor(j % 3)];

      if (rowVal !== ".") {
        if (rowSeen.has(rowVal)) return false;
        rowSeen.add(rowVal);
      }

      if (colVal !== ".") {
        if (colSeen.has(colVal)) return false;
        colSeen.add(colVal);
      }

      if (boxVal !== ".") {
        if (boxSeen.has(boxVal)) return false;
        boxSeen.add(boxVal);
      }
    }
  }

  return true;
}

/*
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false

Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
*/

/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
*/
