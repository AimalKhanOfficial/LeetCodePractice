/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
//Solved - https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/submissions/1370574372/
var getFinalState = function(nums, k, multiplier) {
    for (let i = 0; i < k; i++) {
        let index = nums.indexOf(Math.min(...nums));
        let number = nums[index];
        number *= multiplier;
        nums[index] = number;
    }
    return nums;
};

console.log('>> ', getFinalState(nums = [2,1,3,5,6], k = 5, multiplier = 2))