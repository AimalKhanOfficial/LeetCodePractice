/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    const rampWidths = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] <= nums[j]) {
                rampWidths.push(j - i);
            }
        }
    }
    return rampWidths.length > 0 ? Math.max(...rampWidths) : 0;
 };

console.log('>> maxWidthRamp', maxWidthRamp([1,0]))