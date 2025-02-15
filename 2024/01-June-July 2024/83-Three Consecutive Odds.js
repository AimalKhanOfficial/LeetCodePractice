/**
 * @param {number[]} arr
 * @return {boolean}
 */
//Solved - https://leetcode.com/problems/three-consecutive-odds/submissions/1332421403
var threeConsecutiveOdds = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 === arr.length || i + 2 === arr.length) break;
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
            return true;
        }
    }
    return false;
};

console.log('>> ', threeConsecutiveOdds([1,3]))