//Solved - https://leetcode.com/problems/length-of-last-word/submissions/1296550474/
//Runtime 52 ms - Beats 54.84%

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.length === 0) return 0;
    return s.trimStart().trimEnd().split(' ').pop().length;
};

console.log('>> Hello World', lengthOfLastWord('Hello World'))
console.log('>>    fly me   to   the moon  ', lengthOfLastWord('luffy is still joyboy'))