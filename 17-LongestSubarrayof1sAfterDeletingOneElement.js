/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0;
    let right = 0;
    let leftCounter = 0;
    let rightCounter = 0;
    let shouldLoop = true;
    let allSums = [];
    for (let i = 0; i < nums.length; i++) {
        left = i - 1;
        right = i + 1;
        leftCounter = 0;
        rightCounter = 0;
        shouldLoop = true;
        if (nums[i] === 1) continue;
        while (shouldLoop) {

            if (nums[left] === 1) {
                left--;
                leftCounter++;
            } 

            if (nums[right] === 1) {
                right++;
                rightCounter++;
            }
            if ((!nums[left] || nums[left] === 0) && ((!nums[right] || nums[right] === 0))) {
                shouldLoop = false;
            }
        }
        allSums.push(leftCounter + rightCounter);
    }
    //console.log('>>> allSums', allSums)
    
    return allSums.length > 0 ? Math.max(...allSums) : 0;
};

console.log('>>> [1,1,1]', longestSubarray([1,1,1]))
//console.log('>>> [0,1,1,1,0,1,1,0,1]', longestSubarray([0,1,1,1,0,1,1,0,1]))
//console.log('>>> [1,1,0,1]', longestSubarray([1,1,0,1]))