/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};

console.log('>> ', search(nums = [2, 5], target = 5))