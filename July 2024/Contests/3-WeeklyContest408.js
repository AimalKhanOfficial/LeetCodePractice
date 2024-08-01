
//----------------------------------------------------------------------------------------------------------------------------

// /**
//  * @param {number} l
//  * @param {number} r
//  * @return {number}
//  */
// //works but TIME LIMIT EXCEEDED - 486 / 855 testcases passed - WILL MOVE ON TO THE NEXT QUESTION
// var nonSpecialCount = function (l, r) {
//     let properDivisors = [];
//     for (let i = l; i <= r; i++) {
//         let divisors = [];
//         for (let j = 0; j < i; j++) {
//             if (i % j === 0) {
//                 divisors.push(j);
//             }
//         }
//         if (divisors.length !== 2) {
//             properDivisors.push(i);
//         }
//     }
//     console.log('>> div of ',  properDivisors)
//     return properDivisors.length;
// };

// console.log('>> ', nonSpecialCount(l = 5, r = 7))

//----------------------------------------------------------------------------------------------------------------------------
//Solved - with-in 5 min
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canAliceWin = function(nums) {
//     let sumSingleDigits = 0;
//     let sumDoubleDigits = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > 9) {
//             sumDoubleDigits += nums[i];
//         } else {
//             sumSingleDigits += nums[i];
//         }
//     }
//     return sumSingleDigits > sumDoubleDigits || sumDoubleDigits > sumSingleDigits;
// };

// console.log('>> nums = [1,2,3,4,10]', canAliceWin(nums = [1,2,3,4,5,14]))