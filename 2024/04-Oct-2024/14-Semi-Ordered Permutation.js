/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
    if (!nums.includes(1) || !nums.includes(nums.length)) return false;
    let oneIndex = nums.indexOf(1);
    
    let minSteps = 0;
    while (nums[0] !== 1) {
        let indexOfItemBeforeOne = oneIndex - 1;
        let itemBeforeOne = nums[indexOfItemBeforeOne];
        //console.log('>> swapping', itemBeforeOne, 'at', indexOfItemBeforeOne, 'with', nums[oneIndex], 'at', oneIndex)
        nums[indexOfItemBeforeOne] = nums[oneIndex];
        nums[oneIndex] = itemBeforeOne;
        oneIndex = indexOfItemBeforeOne;
        minSteps++;
    }
    let lastindex = nums.indexOf(nums.length);
    while (nums[nums.length - 1] !== nums.length) {
        let indexOfItemAfterMax = lastindex + 1;
        let itemAfterMax = nums[indexOfItemAfterMax];
        nums[indexOfItemAfterMax] = nums[lastindex];
        nums[lastindex] = itemAfterMax;
        lastindex = indexOfItemAfterMax;
        minSteps++;
    }
    return minSteps;
};

console.log('>> semiOrderedPermutation', semiOrderedPermutation( nums = [2,4,1,3]));