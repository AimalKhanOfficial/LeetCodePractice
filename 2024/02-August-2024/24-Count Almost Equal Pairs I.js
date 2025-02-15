/**
 * @param {number[]} nums
 * @return {number}
 */
var countPairs = function(nums) {
    let similarPairCounter = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (i === j) continue;
            if ((Math.abs(nums[i]) === Math.abs(parseInt(nums[j].toString().split('').reverse().join('')))) || (Math.abs(nums[j]) == Math.abs(parseInt(nums[i].toString().split('').reverse().join(''))))) {
                similarPairCounter++;
            }
        }
    }
    return similarPairCounter;
};

console.log('>> countPairs', countPairs([8,12,5,5,14,3,12,3,3,6,8,20,14,3,8]))