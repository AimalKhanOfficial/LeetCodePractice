/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

//Solved - https://leetcode.com/problems/find-the-encrypted-string/submissions/1400634977/

var getEncryptedString = function(s, k) {
    let final = [];
    //For each character c in s, replace c with the kth character after c in the string (in a cyclic manner).
    for (let i = 0; i < s.length; i++) {
        let indexToReplaceWith = (i + k) % s.length;
        final.push(s[indexToReplaceWith]);
    }
    return final.join('');
};

console.log('>>', getEncryptedString(s = "byd", k = 4))