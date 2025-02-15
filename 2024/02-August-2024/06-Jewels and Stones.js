/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
//Solved - https://leetcode.com/problems/jewels-and-stones/submissions/1346069837/
var numJewelsInStones = function(jewels, stones) {
    let counter = 0;
    stones.split('').forEach(stone => {
        if (jewels.includes(stone)) counter++;
    });
    return counter;
};

console.log('>> ', numJewelsInStones(jewels = "z", stones = "ZZ"))