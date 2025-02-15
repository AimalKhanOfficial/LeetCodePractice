/**
 * @param {string} s
 * @return {number}
 */
//https://leetcode.com/problems/count-asterisks/submissions/1357899783/
var countAsterisks = function (s) {
    let asterisksCount = 0;
    s = s.split('|');
    for (let i = 0; i < s.length; i++) {
        if (i % 2 !== 0) continue;
        s[i] = s[i].split('');
        let count = s[i]?.filter(a => a === '*').length;
        if (count) {
            asterisksCount += count;
        }
    }
    return asterisksCount;
};

console.log('>>', countAsterisks("yo|uar|e**|b|e***au|tifu|l"))