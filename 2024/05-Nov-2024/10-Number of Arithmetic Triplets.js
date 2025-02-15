/*
i < j < k,
nums[j] - nums[i] == diff, and
nums[k] - nums[j] == diff.
*/

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if ((i < j && j < k) && (nums[j] - nums[i] == diff) && nums[k] - nums[j] == diff) {
                    //console.log('>> ', i , j , k, nums[i], nums[j], nums[k]);
                    counter++;
                }
            }
        }
    }
    return counter;
};

console.log('>>', arithmeticTriplets(nums = [4,5,6,7,8,9], diff = 2))