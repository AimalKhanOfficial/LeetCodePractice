/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let arr = [];
    let arrLength = nums.length;
    for (let i = arrLength - k; i < arrLength; i++) {
        arr.push(nums[i]);
    }
    for (let i = 0; i < k; i++) {
        nums.pop();
    }
    nums = [...arr, ...nums]
    console.log('>> ', nums)
};

console.log('>> ', rotate([1,2,3,4,5,6,7], 3))
                        //[5,6,7,1,2,3,4]  


// var rotate = function(nums, k) {
//     if (k === 0) return;
//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop());
//     }
//     return nums;
// };