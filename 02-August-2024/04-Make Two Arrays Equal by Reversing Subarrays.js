//Solved - https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/submissions/1342831758/
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    return JSON.stringify(arr.sort((a, b) => a - b)) === JSON.stringify(target.sort((a, b) => a - b));
};