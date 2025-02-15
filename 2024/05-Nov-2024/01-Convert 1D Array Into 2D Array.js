/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (m * n !== original.length) return [];
    let twoDArray = [];
    let arrBlock = 0;
    for (let i = 0; i < m; i++) {
        let newArr = [];
        for (let j = 0; j <= n - 1; j++) {
            newArr.push(original[j + arrBlock]);
        }
        twoDArray.push(newArr);
        arrBlock += n;
    }
    return twoDArray;
};

console.log('>>', construct2DArray(original = [1,2,3,4], m = 2, n = 2))