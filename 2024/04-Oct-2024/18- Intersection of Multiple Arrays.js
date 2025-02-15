/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const numbersMap = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            let counter = 0;
            let shouldPush = true;
            while (counter < nums.length) {
                if (!nums[counter].includes(nums[i][j])) {
                    shouldPush = false;
                    break;
                }
                counter++;
            }
            if (shouldPush && !numbersMap.includes(nums[i][j])) {
                numbersMap.push(nums[i][j]);
            }
        }
    }
    return numbersMap.sort((a, b) => a - b);
};

console.log('>> ', intersection(nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))