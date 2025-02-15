/**
 * @param {number[]} heights
 * @return {number}
 */
//https://leetcode.com/problems/height-checker/submissions/1311003901/
var heightChecker = function(heights) {
    let heightCopy = [...heights].sort((a, b) => a - b);
    let counter = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== heightCopy[i]) {
            counter++;
        }
    }
    return counter;
};

console.log(heightChecker([1,2,3,4,5]))