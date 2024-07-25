/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let finalSentence = '';
    s = s.split(' ');
    for (let i = 0; i < s.length; i++) {
        finalSentence += s[i].split('').reverse().join('') + ' ';
    }
    return finalSentence.trim();
};
console.log('>> ', reverseWords("Let's take LeetCode contest"))