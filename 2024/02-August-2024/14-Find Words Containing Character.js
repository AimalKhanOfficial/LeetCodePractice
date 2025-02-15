/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
//Solved - https://leetcode.com/problems/find-words-containing-character/submissions/1350360032/
var findWordsContaining = function(words, x) {
    let indexArr = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            indexArr.push(i);
        }
    }
    return indexArr;
};