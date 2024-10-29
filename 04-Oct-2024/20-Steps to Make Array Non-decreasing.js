/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function(nums) {
    let steps = 0;
    let shouldContinue = true;
    let i = 0;
    let toRemove = [];
    while (shouldContinue) {
        if (nums[i-1] > nums[i]) {
            nums.splice(i, 1);    
        }
        i++;
        if (i === nums.length) {
            let numsCopy = [...nums];
            if (numsCopy.sort((a , b) => a - b).every((value, index) => value === nums[index])) {
                shouldContinue = false;            
            } else {
                steps++;
                i = 0;
            }
        }
    }    
    return steps;                
};

console.log('>>', totalSteps(nums = [5,3,4,4,7,3,6,11,8,5,11]))
