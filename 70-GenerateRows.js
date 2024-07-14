/**
 * @param {number} numRows
 * @return {number[][]}
 */
//works - https://leetcode.com/problems/pascals-triangle/submissions/1320189786/
var generate = function(numRows) {
    let finalArr = [];
    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            finalArr.push([1]);
            continue;
        }
        else if (i === 1) {
            finalArr.push([1, 1]);
            continue;
        }
        let oldArr = finalArr[i - 1];
        let newArr = [];
        for (let j = 0; j < i; j++) {
            if (j + 1 === oldArr.length) break;
            let newValue = oldArr[j] + oldArr[j + 1];
            newArr.push(newValue);
        }
        finalArr.push([1, ...newArr, 1])
    }
    return finalArr;
};

console.log('>> generate', generate(5));