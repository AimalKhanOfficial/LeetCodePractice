/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    //nums = nums.sort((a, b) => a < b);
    let numbersMap = [];
    for (let i = 1; i <= Math.max(...nums) + 1; i++) {
        numbersMap.push(i);
    }
    //console.log('>> nums', numbersMap, Math.max(...nums) + 1)
    for (let i = 0; i < numbersMap.length; i++) {
        if (!nums.includes(numbersMap[i])) {
            return numbersMap[i];
        }
    }
};

console.log('>>> [1,2,0]', firstMissingPositive([1,2,0]))
console.log('>>> [3,4,-1,1]', firstMissingPositive([3,4,-1,1]))
console.log('>>> [7,8,9,11,12]', firstMissingPositive([7,8,9,11,12]))
