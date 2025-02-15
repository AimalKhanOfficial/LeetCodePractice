/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    if (nums.length === 0) return false;

    let totalPairs = nums.length / 2;
    for (let i = 0; i < totalPairs; i++) {

        let firstValue = nums[0];
        nums.splice(0, 1);
        let indexOfAnotherHalf = nums.indexOf(firstValue);
        if (indexOfAnotherHalf === -1) {
            return false;
        } else {
            nums.splice(indexOfAnotherHalf, 1);
        }

    }
    return nums.length === 0;
};