/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Solved - https://leetcode.com/problems/sort-array-by-increasing-frequency/submissions/1330780748
var frequencySort = function(nums) {
    let freqMapper = {};
    let finalArr = []
    for (let i = 0; i < nums.length; i++) {
        if (!freqMapper[nums[i]]) {
            freqMapper[nums[i]] = 1;
        }
        else {
            freqMapper[nums[i]]++;
        }
    }
    Object.entries(freqMapper).sort((a, b) => parseInt(a[1]) === parseInt(b[1]) ? parseInt(b[0]) - parseInt(a[0]) : a[1] - b[1]).forEach(a => {
        for (let i = 0; i < a[1]; i++) {
            finalArr.push(parseInt(a[0]));
        }
    })
    return finalArr;
};

console.log('>> expected: [3,1,1,2,2,2]. actual:', frequencySort([1,1,2,2,2,3]))
console.log('>> expected: [1,3,3,2,2]. actual:', frequencySort([2,3,1,3,2]))