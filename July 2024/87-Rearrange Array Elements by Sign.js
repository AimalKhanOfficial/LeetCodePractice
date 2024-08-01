/**
 * @param {number[]} nums
 * @return {number[]}
 */
//works - passes about 132 our of 134 test cases but then results in a time limit exceeded error
var rearrangeArray = function (nums) {
    let negativeNums = [];
    let positiveNums = [];
    let final = [];
    for (let i=0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            positiveNums.push(nums[i]);
        } else {
            negativeNums.push(nums[i])
        }
    }
    let positive = false;
    for (let i=0; i < nums.length; i++) {
        positive = !positive;
        if (positive) {
            final.push(positiveNums.shift());
        } else {
            final.push(negativeNums.shift());
        }
    }
    console.log('>>', negativeNums, positiveNums, final)
};

console.log('>>', rearrangeArray([3, 1, -2, -5, 2, -4]))