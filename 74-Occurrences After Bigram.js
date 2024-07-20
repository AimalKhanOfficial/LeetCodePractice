/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
//Solved - https://leetcode.com/problems/occurrences-after-bigram/submissions/1326781223/
var findOcurrences = function(text, first, second) {
    let answers = [];
    text = text.split(' ');
    for (let i = 0; i < text.length; i++) {
        if (text[i] === first) {
            if (text[i + 1] === text.length) continue;
            if (text[i + 1] === second) {
                if (!text[i + 2] || text[i + 2] === text.length) continue;
                answers.push(text[i + 2]);
            }
        }
    }
    return answers;
};

console.log('>> ', findOcurrences("ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk",
     first = "lnlqhmaohv", second = "ypkk"))