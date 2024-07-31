/**
 * @param {number[]} nums
 * @return {number}
 */
//Solved - https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/submissions/1339061414/
var minimumOperations = function(nums) {
    let operations = 0;
    for (let i = 0; i < nums.length; i++) {
        if (((nums[i]) % 3) === 0 ) continue;
        else if (((nums[i] - 1) % 3) === 0 || ((nums[i] + 1) % 3) === 0) {
            operations++;
            continue;
        } else {
            //not possible, one value is problematic
            return 0;
        }
    }
    return operations;
};

console.log('>> ', minimumOperations([1,2,3,4]))