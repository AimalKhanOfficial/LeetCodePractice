//my first approach
//Solved - https://leetcode.com/problems/search-insert-position/
//Beats - 83% of solutions on runtime
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 0) return 0;
    let matchFound = false;
    let indexOfInterest = 0;
    for (let i = 0; i < nums.length; i++) {
        //match found
        if (nums[i] === target) {
            matchFound = true;
            indexOfInterest = i;
            break;
        }

        // 
        else if (nums[i] > target) {
            matchFound = true;
            indexOfInterest = i;
            break;
        }
    }
    return matchFound ? indexOfInterest : nums.length;
};

console.log('>> searchInsert', searchInsert([1,3,5,6], 5))
console.log('>> searchInsert', searchInsert([1,3,5,6], 2))
console.log('>> searchInsert', searchInsert([1,3,5,6], 7))