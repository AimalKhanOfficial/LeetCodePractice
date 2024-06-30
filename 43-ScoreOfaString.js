/**
 * @param {string} s
 * @return {number}
 */
//https://leetcode.com/problems/score-of-a-string/submissions/1305252849/
var scoreOfString = function(s) {
    let sum = 0;
    s.split('').forEach((element, index) => {
        if (!s[index + 1]) return;
        sum += Math.abs(element.charCodeAt(0) - (s[index + 1]?.charCodeAt(0) || 0));
    });
    return sum;
};

console.log('>> scoreOfString', scoreOfString('zaz'))