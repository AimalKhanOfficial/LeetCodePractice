/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//Solved - https://leetcode.com/problems/intersection-of-two-arrays-ii/?envType=daily-question&envId=2024-07-02
var intersect = function(nums1, nums2) {
    let intersectionArr = [];
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.length) break;
        if (nums2.includes(nums1[i])) {
            let indexOfElementInNums2 = nums2.indexOf(nums1[i]);
            nums2.splice(indexOfElementInNums2, 1)
            intersectionArr.push(nums1[i]);
        }
    }
    return intersectionArr;
};