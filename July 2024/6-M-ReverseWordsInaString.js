/**
 * @param {string} s
 * @return {string}
 */
//https://leetcode.com/problems/reverse-words-in-a-string/submissions/1241074331/?envType=study-plan-v2&envId=leetcode-75
var reverseWords = function(s) {
    return s.trimStart().trimEnd().split(' ').filter(x => x !== '').reverse().join(' ');
};

console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
