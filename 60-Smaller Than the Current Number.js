/**
 * @param {number[]} nums
 * @return {number[]}
 */
//https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/submissions/1313092523/
var smallerNumbersThanCurrent = function(nums) {
    let listArr = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
       count = 0;
       for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;
            if (nums[i] > nums[j]) {
                count++;
            }
        } 
        listArr.push(count)
    }
    return listArr;
};
