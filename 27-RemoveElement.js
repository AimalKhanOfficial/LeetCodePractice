/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0) return 0;
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = '_';
            counter++;
        }
    }
    nums = nums.sort();
    console.log('>> nums', nums)
    return nums.length - counter;
};

console.log('>> removeElment', removeElement([0,1,2,2,3,0,4,2], 2))