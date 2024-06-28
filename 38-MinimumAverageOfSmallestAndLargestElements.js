/**
 * @param {number[]} nums
 * @return {number}
 */
//Works - https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/submissions/1302950822/
var minimumAverage = function(nums) {
    let smallest = 0;
    let smallestIndex = 0;
    let largest = 0;
    let largestIndex = 0;
    let finalArr = [];
    while(nums.length !== 0) {
        nums.forEach((value, i) => {
            if (value > largest ) {
                largest = value;
                largestIndex = i;
            }
        })
        nums.splice(largestIndex, 1);
        smallest = largest;
        nums.forEach((value, i) => {
            if (value < smallest ) {
                smallest = value;
                smallestIndex = i;
            }
        })
        nums.splice(smallestIndex, 1);
        finalArr.push((smallest + largest) / 2);
        largest = smallest;
    }
    return Math.min(...finalArr)
};

console.log('>> [7,8,3,4,15,13,4,1]', minimumAverage([7,8,3,4,15,13,4,1]))