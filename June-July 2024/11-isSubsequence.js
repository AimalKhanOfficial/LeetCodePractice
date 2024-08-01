/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Works but need to submit a 2 pointer solution instead 
//https://leetcode.com/problems/is-subsequence/submissions/1246859442/?envType=study-plan-v2&envId=leetcode-75
var isSubsequence = function(s, t) {
    let lastindex = 0;
    let charsFound = [];
    for (let i = 0; i < s.length; i++) {
        let charFound = false;
        for (let j = lastindex; j < t.length; j++) {
            //console.log('startig from: ', j, s[i], t[j], s[i] === t[j])
            if (s[i] === t[j]) {
                charFound = true;
                lastindex = j;
                break;
            }
        }
        lastindex++;
        charsFound.push(charFound);
        //console.log('>>> charsFound', charsFound);
    }
    return ![...charsFound].includes(false);
};

console.log('>>> s = "acb", t = "ahbgdc"', isSubsequence("aaaaaa", "bbaaaa")) //expected false
console.log('>>> s = "acb", t = "ahbgdc"', isSubsequence("acb", "ahbgdc"))
console.log('>>> s = "abc", t = "ahbgdc"', isSubsequence("abc", "ahbgdc"))
console.log('>>> s = "axc", t = "ahbgdc"', isSubsequence("axc", "ahbgdc"))

