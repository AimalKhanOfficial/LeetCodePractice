/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//Submitted = https://leetcode.com/problems/move-zeroes/submissions/1245642435/?envType=study-plan-v2&envId=leetcode-75
//Beats 92% of users via Runtime
var moveZeroes = function(nums) {
    let zerosPointer = 0;
    let nonZeroPointer = 0;
    let shouldBreakLoop = false;
    let stagingArea = '';
    while (!shouldBreakLoop) {
        if (nonZeroPointer === nums.length) shouldBreakLoop = true;
        //console.log('>> nums', nums);
        if (nums[nonZeroPointer] && nums[nonZeroPointer] !== 0) {
            //swapping values = moving a nonzero value to left
            stagingArea = nums[zerosPointer];
            nums[zerosPointer] = nums[nonZeroPointer];
            nums[nonZeroPointer] = stagingArea;
            nonZeroPointer++;
            zerosPointer++;
        }
        else {
            nonZeroPointer++;
        }
    }
    return nums;
};

console.log('>> [0,0,1]', moveZeroes([0,0,1])) //Output -> [0,1,0], Expected [1,0,0]
console.log('>> [0,1,0,3,12]', moveZeroes([0,1,0,3,12]))
console.log('>> [0]', moveZeroes([0]))
console.log('>> [0,0,0,0,0]', moveZeroes([0,0,0,0,0]))
console.log('>> [1,0,2,0,3,0,4,0,5]', moveZeroes([1,0,2,0,3,0,4,0,5]))

//First attemp but with no 2 pointers - works with 24 test cases but does not cover all
// for (let i = 0; i < nums.length; i++) {
//     console.log('>> checking', nums[i], 'at', i)
//     if (nums[i] === 0) {
//         nums.splice(i, 1);
//         nums.push(0);
//     }
// }