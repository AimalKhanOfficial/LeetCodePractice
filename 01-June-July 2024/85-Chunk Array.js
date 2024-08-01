/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
//Solved - https://leetcode.com/problems/chunk-array/submissions/1334581761/
var chunk = function(arr, size) {
    if (!arr) return [];
    let finalArr = [];
    let counter = 0;
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        let subArr = [];
        for (let j = 0; j < size; j++) {
            if (arr[counter] !== undefined) {
                subArr.push(arr[counter])
            }
            counter++;
        } 
        finalArr.push(subArr);
    }
    return finalArr;
};

console.log('>>', chunk([1,2,3,4,5], 1))
console.log('>>', chunk([1,9,6,3,2], 3))
console.log('>>', chunk(arr = [8,5,3,2,6], size = 6))