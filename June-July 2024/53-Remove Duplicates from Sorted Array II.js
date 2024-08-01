/**
 * @param {number[]} nums
 * @return {number}
 */
//Solved - https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150
// 57 ms - Beats 78.93%
var removeDuplicates = function (nums) {
    let numbersMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (!numbersMap[nums[i]]) {
            numbersMap[nums[i]] = 1;
        }
        else {
            numbersMap[nums[i]] += 1;
        }
    }
    console.log('>> numbersMap', numbersMap)
    Object.entries(numbersMap).forEach(pair => {
        if (pair[1] > 2) {
            for (let i = 0; i < pair[1]; i++) {   
                if (numbersMap[pair[0]] <= 2) break;
                nums.splice(nums.indexOf(parseInt(pair[0])), 1)
                numbersMap[pair[0]] -= 1;
            }
        }
    });

    console.log('>> nums', nums)
    return nums.length;
};

console.log('>> ', removeDuplicates([0,0,1,1,1,1,2,3,3]))

//works but LC does not accept it cuz nums is not been updated in-place????!!
// var removeDuplicates = function(nums) {
//     let numbersMap = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (!numbersMap[nums[i]]) {
//             numbersMap[nums[i]] = 1;
//         }
//         else if (numbersMap[nums[i]] < 2) {
//             numbersMap[nums[i]] += 1;
//         }
//     }
//     nums = [];
//     Object.entries(numbersMap).forEach(pair => {
//         if (pair[1] === 1) {
//             nums.push(parseInt(pair[0]))
//         } else {
//             for (let i = 0; i < pair[1]; i++) {
//                 nums.push(parseInt(pair[0]))
//             }
//         }
//         //console.log(pair)
//     })
//     console.log('>> nums', nums)
//     return nums.length;
// };