/**
 * @param {number[]} nums
 * @return {number}
 */
//Works - https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/submissions/1302950822/
var minimumAverage = function(nums) {
    let smallest = 0;
    let smallestIndex = 0;
    let largest = 0;
    let largestIndex = nums.length - 1;
    let finalArr = [];
    while(nums.length !== 0) {
       for (let i = 0; i < nums.length; i++) {
            if (nums[i] > largest) {
                
            }
       }
    }
    return Math.min(...finalArr)
};

console.log('>> [7,8,3,4,15,13,4,1]', minimumAverage([7,8,3,4,15,13,4,1]))