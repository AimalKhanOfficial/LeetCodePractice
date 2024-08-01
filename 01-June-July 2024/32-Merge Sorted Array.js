/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (!nums2.length) return;
    let counter = 0;
    for (let i = m; i < n + m; i++) {
        nums1[i] = nums2[counter];
        counter++;
    }
    nums1 = nums1.sort();
};

console.log('>>> merge', merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log('>>> merge', merge([0], 0, [1], 1))