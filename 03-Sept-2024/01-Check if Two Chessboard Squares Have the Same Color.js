/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
//https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/submissions/1382195704/
var checkTwoChessboards = function (coordinate1, coordinate2) {
  let chessBoard = [];
  let isSlotWhite = true;
  let charToSlotMap = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
  };
  for (let i = 8; i >= 1; i--) {
    if (i % 2 !== 0) {
      isSlotWhite = false;
    } else {
      isSlotWhite = true;
    }
    let boardRow = [];
    for (let j = 8; j >= 1; j--) {
      boardRow.push(isSlotWhite ? "w" : "b");
      isSlotWhite = !isSlotWhite;
    }
    chessBoard.push(boardRow);
  }
  coordinate1 = coordinate1.split("");
  coordinate2 = coordinate2.split("");
  return (
    chessBoard[coordinate1[1] - 1][charToSlotMap[coordinate1[0]]] ===
    chessBoard[coordinate2[1] - 1][charToSlotMap[coordinate2[0]]]
  );
};

console.log(">>", checkTwoChessboards("h7", "c8"));
