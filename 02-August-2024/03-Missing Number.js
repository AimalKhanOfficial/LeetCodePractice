/**
 * @param {number[]} nums
 * @return {number}
 */
//Solved - https://leetcode.com/problems/missing-number/submissions/1342302742/
var missingNumber = function(nums) {
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 && nums[i] !== 0) return 0;
        if (nums[i] + 1 === nums[i + 1]) continue;
        else {
            return nums[i] + 1;
        }
    }
    return nums[nums.length - 1] + 1;
};

console.log('>> ', missingNumber([1]))