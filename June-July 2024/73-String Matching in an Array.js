/**
 * @param {string[]} words
 * @return {string[]}
 */
//Solved - https://leetcode.com/problems/string-matching-in-an-array/submissions/1325783822/
var stringMatching = function(words) {
    let answers = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if ( i === j ) continue;
            if (words[j].includes(words[i])) {
                if (!answers.includes(words[i])) {
                    answers.push(words[i]);
                }
            } 
        }
    }
    return answers;
};

console.log('>> ', stringMatching(["mass","as","hero","superhero"]))