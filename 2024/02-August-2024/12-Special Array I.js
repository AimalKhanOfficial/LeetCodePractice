/**
 * @param {number[]} nums
 * @return {boolean}
 */
//Solved - https://leetcode.com/problems/special-array-i/submissions/1350352155/
var isArraySpecial = function(nums) {
    if (!nums) return false;
    if (nums.length === 1) return true;
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        if (j === nums.length) break;
        if ((nums[i] % 2 !== 0 && nums[j] % 2 === 0) || (nums[i] % 2 === 0 && nums[j] % 2 !== 0)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};