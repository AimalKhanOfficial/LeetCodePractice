/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//solved - https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/submissions/1339050330/
var countPairs = function (nums, k) {
    let result = 0;
    let processedIndices = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;
            let pair1 = `${i}_${j}`;
            let pair2 = `${j}_${i}`;
            if (nums[i] === nums[j] && ((i * j) % k) === 0 && !processedIndices.includes(pair1) && !processedIndices.includes(pair2)) {
                processedIndices.push(`${i}_${j}`);
                processedIndices.push(`${j}_${i}`);
                result++;
            }
        }
    }
    return result;
};

console.log('>> ', countPairs(nums = [3, 1, 2, 2, 2, 1, 3], k = 2))