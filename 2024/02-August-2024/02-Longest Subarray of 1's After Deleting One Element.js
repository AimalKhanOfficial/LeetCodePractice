/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    if (!nums || nums.length === 0) return 0;
    let zeroIndices = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroIndices.push(i)
        }
    }
    if (zeroIndices.length === 0) {
        return nums.length - 1;
    }
    else if (zeroIndices.length === 1) {
        return nums.length - zeroIndices.length;
    } else {
        let allLength = [];
        for (let i = 0; i < zeroIndices.length; i++) { 
            let prev = zeroIndices[i - 1] ?? 0;
            let next = zeroIndices[i + 1] ?? 0;
            let length = i === 0 ? next - zeroIndices[i] : next - prev - 2;
            allLength.push(length)
        }
        console.log('>> ', allLength)
        return Math.max(...allLength);
    }
};

console.log('>>', longestSubarray(nums = [1,1,0,0,1,1,1,0,1]))