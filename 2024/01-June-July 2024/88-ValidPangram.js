/**
 * @param {string} sentence
 * @return {boolean}
 */
//Solved - https://leetcode.com/problems/check-if-the-sentence-is-pangram/submissions/1337910102/
var checkIfPangram = function(sentence) {
    let allLetters = new Array(26).fill(0);
    for (let char of sentence) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        allLetters[index]++;
    }
   return !allLetters.filter(a => a === 0).length > 0;
};

console.log('>>', checkIfPangram('leetcode'))