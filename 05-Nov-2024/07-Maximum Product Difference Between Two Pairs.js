/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {

    nums = nums.sort((a, b) => b - a);

    if (nums.length > 4) {
        let lastIndex = nums.length - 1;
        return (nums[0] * nums[1]) -  (nums[lastIndex - 1] * nums[lastIndex])
    } else {
        const pairs = [];
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                pairs.push(nums[i] * nums[j]);
            }
        }

        const maxDifferences = [];
        for (let i = 0; i < pairs.length; i++) {
            for (let j = i + 1; j < pairs.length; j++) {
                maxDifferences.push(Math.abs(pairs[i] - pairs[j]));
            }
        }
        
        return Math.max(...maxDifferences);
    }
};

console.log('>> ', maxProductDifference(nums = [4,2,5,9,7,4,8]))