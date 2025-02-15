/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let maxNumberOfOps = 0;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum < k) {
            left++;
        }
        else if (sum > k) {
            right--;
        }
        else {
            maxNumberOfOps++;
            left++;
            right--;
        }
    }
    return maxNumberOfOps;
};

console.log('>> Passing [1,2,3,4] to maxOp returns:', maxOperations([1,2,3,4], 5), 'Expected? 2')
console.log('>> Passing [3,1,3,4,3] to maxOp returns:', maxOperations([3,1,3,4,3], 6), 'Expected? 1')
//console.log('>> Passing [1,1,1,1,1] to maxOp returns:', maxOperations([1,1,1,1,1], 6), 'Expected? 0')

//testing asc sort
//console.log([3,1,3,4,3].sort((a, b) => a - b))

//my first attempt
/* 
 //base condition
    if (nums.length === 1) return 0;

    let left = 0;
    let right = left + 1;
    let shouldContinueLoop = true;
    let numberOfMaxOps = 0;
    while (shouldContinueLoop) {
        if (nums.length === 0 || (left >= nums.length && right >= nums.length)) shouldContinueLoop = false;
        if (nums[left] + nums[right] === k) {
            numberOfMaxOps += 1;
            nums.splice(left, 1);
            right = right - 1;
            nums.splice(right, 1);
        }
        else {
            right++;
            if (right >= nums.length) {
                left = left + 1;
                right = left + 1;
            }
        }
    }
*/