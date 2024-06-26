/**
 * @param {number[]} nums
 * @return {number}
 */
//https://leetcode.com/submissions/detail/1300385635/
var singleNumber = function(nums) {
    let extraArr = [];
    extraArr = nums.filter((value, index, self) => self.indexOf(value) !== index);
    return nums.filter(value => !extraArr.includes(value))
};

console.log('>>> singleNumber', singleNumber([1]))