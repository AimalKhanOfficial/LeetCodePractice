/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
//Solved: https://leetcode.com/problems/find-the-difference-of-two-arrays/submissions/1266171090/?envType=study-plan-v2&envId=leetcode-75
var findDifference = function(nums1, nums2) {
    let firstArr = new Map();
    let secondArr = new Map();
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i])) firstArr.set(nums1[i])
    }

    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i])) secondArr.set(nums2[i])
    }
    return [[...firstArr.keys()], [...secondArr.keys()]]
};

console.log('>>> [1,2,3] & [2,4,6]', findDifference([1,2,3], [2,4,6]))
console.log('>>> [1,2,3,3] & [1,1,2,2]', findDifference([1,2,3,3], [1,1,2,2]))