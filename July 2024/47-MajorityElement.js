/**
 * @param {number[]} nums
 * @return {number}
 */
//Solved - https://leetcode.com/problems/majority-element/submissions/1306530267/?envType=daily-question&envId=2024-07-02
var majorityElement = function(nums) {
    if (!nums) return nums;
    let target = nums.length / 2;
    let numCount = {};
    for (let i = 0; i < nums.length; i++) {
        if (!numCount[nums[i]]) {
            numCount[nums[i]] = 1;
        } else {
            numCount[nums[i]] += 1;
        }
    }
    return Object.entries(numCount).find(a => a[1] > target)[0];
};

console.log(majorityElement([3,2,3]))