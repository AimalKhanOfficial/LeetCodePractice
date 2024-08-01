/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let pairs = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i < j && nums[i] + nums[j] < target) {
                pairs++;
            }
        }
    }
    return pairs;
};

console.log('>> ', countPairs(nums = [-1,1,2,3,1], target = 2))
console.log('>> ', countPairs(nums = [-6,2,5,-2,-7,-1,3], target = -2))