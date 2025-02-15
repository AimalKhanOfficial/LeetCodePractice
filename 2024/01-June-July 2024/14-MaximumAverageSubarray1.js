/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//submitted - https://leetcode.com/problems/maximum-average-subarray-i/?envType=study-plan-v2&envId=leetcode-75
//passes 123 test cases out of 127
var findMaxAverage = function (nums, k) {
    let sum = 0;
    let allAverages = [];
    for (let i = 0; i < nums.length; i++) {
        let subArray = nums.slice(i, (i + k));
        if (subArray.length === k) {
            sum = subArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            sum = parseFloat((sum / k).toFixed(5));
            allAverages.push(sum);
        }
    }
    return Math.max(...allAverages);
};

console.log('>>> findMaxAverage', findMaxAverage([1, 12, -5, -6, 50, 3], 4), 'should be: 12.75000')
console.log('>>> findMaxAverage', findMaxAverage([5], 1), 'should be: 12.75000')