/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {

    const pairs = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            pairs.push(nums[i] * nums[j]);
        }
    }

    let maxDifferences = [];
    for (let i = 0; i < pairs.length; i++) {
        for (let j = i + 1; j < pairs.length; j++) {
            maxDifferences.push(Math.abs(pairs[i] - pairs[j]));
        }
    }

    maxDifferences = maxDifferences.sort((a, b) => b - a);
    
    return maxDifferences[0];
};

console.log('>> ', maxProductDifference(nums = [4,2,5,9,7,4,8]))