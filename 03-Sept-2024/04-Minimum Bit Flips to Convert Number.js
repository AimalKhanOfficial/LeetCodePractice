//Solved - https://leetcode.com/problems/minimum-bit-flips-to-convert-number/submissions/1385999001/

const lengthMismatch = (source, target) => source.length !== target.length;

/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let source = start.toString(2).split('');
    let target = goal.toString(2).split('');
    if (lengthMismatch(source, target)) {
        let differenceX = source.length - target.length;
        for (let i = 0; i < differenceX; i++) {
            target.unshift('0');
        }
        let differenceY = target.length - source.length;
        for (let i = 0; i < differenceY; i++) {
            source.unshift('0');
        }
    }
    let bitFlips = 0;
    for (let i = source.length; i >= 0; i--) {
        if (source[i] !== target[i]) {
            bitFlips += 1;
        }
    }
    return bitFlips;
};

console.log('>>> minBitFlips', minBitFlips(start = 10, goal = 7))
console.log('>>> minBitFlips', minBitFlips(start = 3, goal = 4))