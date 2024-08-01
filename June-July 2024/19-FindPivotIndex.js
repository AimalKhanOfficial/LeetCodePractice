/**
 * @param {number[]} nums
 * @return {number}
 */
//solved - https://leetcode.com/problems/find-pivot-index/submissions/1265270691/?envType=study-plan-v2&envId=leetcode-75
var pivotIndex = function(nums) {
    let left = 0;
    let right = 0;
    for (let i = 0; i < nums.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (left = i - 1; left >= 0; left--) {
            leftSum += nums[left];
        }
        for (right = i + 1; right < nums.length; right++) {
            rightSum += nums[right];
        }
        if (leftSum === rightSum) {
            if (i === 0) {
                return 0;
            }
            else {
                return i;
            }
        }
    }
    return -1;
};

//console.log('>> [1,7,3,6,5,6]', pivotIndex([1,7,3,6,5,6]));
console.log('>> [1,2,3]', pivotIndex([1,2,3]));
console.log('>> [2,1,-1]', pivotIndex([2,1,-1]));