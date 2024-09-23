const alphabetValues = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26
};

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    if (columnTitle.length === 1) {
        return alphabetValues[columnTitle];
    } else {
        let splitColumn = columnTitle.split('');
        let columnNumber = 0;
        for (let i = 0; i < splitColumn.length - 1; i++) {
            columnNumber += Math.pow(26, i);
        }
        columnNumber += alphabetValues[splitColumn.pop()];
        return columnNumber;
    }
};

console.log('>> titleToNumber', titleToNumber('FXSHRXW'))