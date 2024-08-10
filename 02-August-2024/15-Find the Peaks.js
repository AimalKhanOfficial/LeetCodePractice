/**
 * @param {number[]} mountain
 * @return {number[]}
 */
//Solved - https://leetcode.com/problems/find-the-peaks/submissions/1350363521/
var findPeaks = function (mountain) {
    let peaks = [];
    for (let i = 0; i < mountain.length; i++) {
        if (i === 0 || i + 1 === mountain.length) continue;
        if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
            peaks.push(i);
        }
    }
    return peaks;
};

console.log('>> findPeaks', findPeaks([2,4,4]))