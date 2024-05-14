/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let breakLoop = false;
    let i = 0;
    let j = 0;
    let copyOfK = k;
    let copyOfNums = nums;
    let log = [];
    let counter = 0;
    while (!breakLoop) {
        console.log('>>> j', j, nums[j])
        //bleh
    }
    console.log('>>> onesMap', log)
};

console.log('>> [1,1,1,0,0,0,1,1,1,1,0]', longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))
//console.log('>> [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]', longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))

//approach # 1 - doesn't work 
// var longestOnes = function(nums, k) {
//     let onesMap = [];
//     let counter = 0;
//     let copyOfK = k;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 1) {
//             counter++;
//         }
//         else {
//             nums[i] = 1;
//             counter++;
//             k--;
//         }
//         if (k === 0 || i === nums.length - 1) {
//             onesMap.push(counter);
//             counter = 0;
//             k = copyOfK;
//         }
//     }
//     console.log('>>> onesMap', onesMap)
// }; 
