/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum = 0;
    let digitSum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let brokenDigits = nums[i].toString().split(''); 
        let brokenSum = 0;
        for (let j = 0; j < brokenDigits.length; j++) {
            brokenSum += parseInt(brokenDigits[j]);
        }
        digitSum += brokenSum;
    }
    return sum - digitSum;
};

console.log('>> ', differenceOfSum(nums = [1,2,3,4]))