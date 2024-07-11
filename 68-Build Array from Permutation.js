//https://leetcode.com/problems/build-array-from-permutation/submissions/1317922919/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        newArr.push(nums[nums[i]]);
    }
    return newArr;
};
