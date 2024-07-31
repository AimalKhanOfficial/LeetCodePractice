/**
 * @param {number} n
 * @return {boolean}
 */
//Solved - https://leetcode.com/problems/strictly-palindromic-number/submissions/1339056130/
var isStrictlyPalindromic = function(n) {
    for (let i = 2; i <= n - 2; i++) {
        let result = n.toString(i);
        console.log('>> ', i, result, result.split('').reverse().join(''))
        if (result.split('').reverse().join('') !== result) return false;
    }
};

console.log('>>', isStrictlyPalindromic(9))