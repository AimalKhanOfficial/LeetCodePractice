/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Solvd - https://leetcode.com/problems/running-sum-of-1d-array/submissions/1313856795/
var runningSum = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) continue;
        nums[i] += nums[i - 1];
    }
    return nums; 
};