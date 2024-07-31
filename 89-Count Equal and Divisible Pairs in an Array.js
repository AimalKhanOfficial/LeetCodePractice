/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//submitted - but doesn't work right now - https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/submissions/1339013454/
var countPairs = function (nums, k) {
    let result = 0;
    let processedIndices = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;
            if (nums[i] === nums[j] && ((i * j) % k) === 0 && !processedIndices.includes(i * j) &&  !processedIndices.includes(j * i)) {
                processedIndices.push(i * j);
                processedIndices.push(j * i);
                result++;
            }
        }
    }
    return result;
};

console.log('>> ', countPairs(nums = [3, 1, 2, 2, 2, 1, 3], k = 2))